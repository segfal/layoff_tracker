const router = require("express").Router();
const { Layoff, sequelize } = require("../database/models");

router.get("/states", async (req, res) => {
    try {
      console.log("Sending request to DB");
      const states = await Layoff.findAll({
        attributes: ['state'], // specify the column you want to retrieve
        group: ['state'], // group by the state column to get distinct values
        order: [['state', 'ASC']], // Orders the states alphabetically
      });
      console.log("Query completed:", states);
  
      const uniqueStates = states.map(item => item.state); // Access the state property directly
      console.log("Unique states:", uniqueStates);
      res.json(uniqueStates);
    } catch (error) {
      console.error("Error fetching states:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

router.use((req, res, next) => {
  console.log(`404 Not Found: ${req.method} ${req.url}`);
  const error = new Error("404 Not Found in ./api");
  error.status = 404;
  next(error);
});

module.exports = router;
