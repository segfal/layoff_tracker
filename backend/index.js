require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const {
  getAllLayoff,
  getTotalRecordCountSpreadSheet,
  getLayoffByState,
  getStates,
} = require("./spreadsheet");
require("dotenv");

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
app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
