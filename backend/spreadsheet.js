require("dotenv").config();
const { google, compute_alpha } = require("googleapis");

async function getSpreadSheet(page = 1) {
  try {
    const googleSheets = google.sheets({
      version: "v4",
      auth: process.env.GOOGLE_API_KEY,
    });

    const spreadsheetId = process.env.SPREADSHEET_ID;

    const response = await googleSheets.spreadsheets.values.get({
      spreadsheetId,
      range: `Sheet1!A${(page - 1) * 500 + 1}:Z${page * 500}`,
    });

    console.log("Sheet1: ", response.data.values[0]);

    const values = response.data.values;

    const companies = {};

    for (let i = 1; i < values.length; i++) {
      const record = values[i];
      if (record[1] in companies) {
        companies[record[1]].push(record);
      } else {
        companies[record[1]] = [record];
      }
    }

    return companies;
  } catch (error) {
    console.log(error);
  }
}

async function getTotalRecordCountSpreadSheet() {
  try {
    const googleSheets = google.sheets({
      version: "v4",
      auth: process.env.GOOGLE_API_KEY,
    });

    const spreadsheetId = process.env.SPREADSHEET_ID;

    const response = await googleSheets.spreadsheets.get({
      spreadsheetId,
    });

    let totalCount = response.data.sheets[0].properties.gridProperties.rowCount;

    const pageSize = 500;

    return totalCount / pageSize;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getSpreadSheet, getTotalRecordCountSpreadSheet };
