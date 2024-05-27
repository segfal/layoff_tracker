const router = require("express").Router();
const { Layoff, sequelize } = require("../database/models");

// route that returns total number of layoffs done per state since jan 2023
router.get("/statelayoff", async (req, res) => {
  try {
    console.log("Sending request to DB");
    const states = await Layoff.findAll({
      attributes: [
        "state",
        [Layoff.sequelize.literal('SUM("number_of_workers")'), "total_workers"],
      ],
      group: ["state"],
      order: [["state", "ASC"]],
    });
    console.log("Query completed:", states);

    const statesWithTotalWorkers = states.map((item) => ({
      state: item.state,
      total_workers: item.dataValues.total_workers,
    }));
    console.log("States with total workers:", statesWithTotalWorkers);

    res.json(statesWithTotalWorkers);
  } catch (error) {
    console.error("Error fetching states:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/company_layoff", async (req,res) => {
  try {
    const companies = await Layoff.findAll({
      attributes: [
        "company",
        [Layoff.sequelize.literal('SUM("number_of_workers")'), "total_workers"],
      ],
        group: ["company"],
        order: [["company", "ASC"]],
    })
    console.log("Query completed:", companies);
    res.json(companies)
    res.sendStatus(200)
    
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
    
  }
})



module.exports = router;
