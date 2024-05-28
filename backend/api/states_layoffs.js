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
    
  } catch (error) {
    console.log(error)
    
  }
})

// returns the number of layoffs done when given a companys name by the end user.
router.get("/company/:company", async (req,res) => {
  try {
    const {company} = req.params
    const query = await Layoff.findAll({
      where: { company: company },
      attributes: [
        [Layoff.sequelize.literal('SUM("number_of_workers")'), "total_workers"],
      ],
    })
    console.log(query[0].dataValues.total_workers)
    res.json(`Number of workers laid off by ${company}: ` + query[0].dataValues.total_workers)

  } catch (error) {
    console.log(error)
  }
})

// return the type of layoff done by xyx in def state
router.get("/type", async (req, res) => {
  try {
    const types = await Layoff.findAll({
      attributes: [
        "company",
        "state",
        "closure_layoff",
        [Layoff.sequelize.literal('SUM("number_of_workers")'), "total_workers"],
      ],
      group: ["company", "state", "closure_layoff"],  // Updated to include all non-aggregated fields
      order: [["company", "ASC"]],
    })
    console.log("Query completed:", types);
    res.json(types);  
  } catch (error) {
    console.log(error)
    res.send(400)
  }
})


module.exports = router;
