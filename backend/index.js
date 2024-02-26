require("dotenv").config();
const express = require("express");
const app = express();
const { google } = require("googleapis");
const port = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  const googleSheets = google.sheets({
    version: "v4",
    auth: process.env.GOOGLE_API_KEY,
  });

  const spreadsheetId = "1V0JlissjAe-wDHbxeEhhIGxXXd3PXhE27QlKwhkpfQM";

  const response = await googleSheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Sheet1",
  });
  console.log("Sheet1: ", response.data.values[0]);
  const values = response.data.values;
  res.send(values[0]);
});

app.listen(port, (req, res) => {
  console.log(`Running on Port: ${port}`);
});
