require("dotenv").config();
const express = require("express");
const app = express();
const { google } = require("googleapis");
const port = process.env.PORT || 8080;
const getSpreadSheet = require("./spreadsheet");

app.get("/", async (req, res) => {
  const values = await getSpreadSheet();

  res.send(values);
});

app.listen(port, (req, res) => {
  console.log(`Running on Port: ${port}`);
});
