require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const {
  getAllLayoff,
  getTotalRecordCountSpreadSheet,
  getLayoffByState,
  getStates,
  getLayoffByDate,
  getByLayoffType,
} = require("./spreadsheet");
require("dotenv");

app.use(cors());

app.get("/", async (req, res) => {
  const values = await getAllLayoff();

  res.send(values);
});

app.get("/page/:page", async (req, res) => {
  const values = await getAllLayoff(req.params.page);

  res.send(values);
});

app.get("/record-count", async (req, res) => {
  const pages = await getTotalRecordCountSpreadSheet();

  res.status(200).json(pages);
});

// Get Layoff By State
app.get("/state/:state/:page", async (req, res) => {
  const { state, page } = req.params;
  const values = await getLayoffByState(parseInt(page), state);
  res.status(200).send(values);
});

app.get("/state", async (req, res) => {
  const states = await getStates();
  res.status(200).send(states);
});

app.get("/date/:from/:to/:page", async (req, res) => {
  const { from, to, page } = req.params;

  const layoffbyDate = await getLayoffByDate(page, from, to);
  res.status(200).send(layoffbyDate);
});

app.get("/type/:type/:page", async (req, res) => {
  const { page, type } = req.params;
  const laidoffByTypes = await getByLayoffType(page, type);

  res.status(200).send(laidoffByTypes);
});

app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
