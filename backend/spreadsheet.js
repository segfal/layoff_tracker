require("dotenv").config();
const { google } = require("googleapis");

async function getSpreadSheet() {
  try {
    const googleSheets = google.sheets({
      version: "v4",
      auth: process.env.GOOGLE_API_KEY,
    });

    const spreadsheetId = process.env.SPREADSHEET_ID;

    const response = await googleSheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1",
    });

    console.log("Sheet1: ", response.data.values[0]);

    const values = response.data.values;

    return values;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getSpreadSheet;
