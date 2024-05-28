const router = require("express").Router();
const { Layoff, sequelize } = require("../database/models");
const pageSize = 50; // returns 50 items per page.

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
  // the page number is going to be provided by the user as a query value to the api endpoint.
  // if not provided, page is set to 1
  const page = parseInt(req.query.page) || 1
  const offset = (page - 1) * pageSize;
  try {
    // implementing 'page-based pagination'. 
    const {count, rows} = await Layoff.findAndCountAll({
      limit: pageSize, // passing in the limit of the # of items we want to retrieve from the database.
      offset: offset,
      attributes: [
        "company",
        [Layoff.sequelize.literal('SUM("number_of_workers")'), "total_workers"],
      ],
        group: ["company"],
        order: [["company", "ASC"]],
    })
    // calculates the total number of pages that are used to store all of the data.
    // 50 items per page is fixed by the backend.
    // note: sending the value to the frontend, so that they know how many times they need to call the endpoint with the page numbers.
    const totalPages = Math.ceil(count.length / pageSize);
    res.json({
      data: rows,
      pageInfo: {
          page,
          itemsPerPage: pageSize,
          totalItems: count.length,
          totalPages
      }
      });
  } catch (error) {
    console.log(error)
    res.send(500)
    
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
