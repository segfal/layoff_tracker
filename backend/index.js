require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const {
  getSpreadSheet,
  getTotalRecordCountSpreadSheet,
} = require("./spreadsheet");

app.get("/", async (req, res) => {
  const values = await getSpreadSheet();

  res.send(values);
});

app.get("/:page", async (req, res) => {
  const values = await getSpreadSheet(req.params.page);

  res.send(values);
});

app.get("/record-count", async (req, res) => {
  const pages = await getTotalRecordCountSpreadSheet();

  res.status(200).json(pages);
});

app.listen(port, (req, res) => {
  console.log(`Running on Port: ${port}`);
});
