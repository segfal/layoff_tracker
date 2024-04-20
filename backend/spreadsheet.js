require("dotenv").config();
const { google, compute_alpha } = require("googleapis");

const googleSheets = google.sheets({
  version: "v4",
  auth: process.env.GOOGLE_API_KEY,
});
const spreadsheetId = process.env.SPREADSHEET_ID;

const getSpreadSheet = async (page) => {
  const response = await googleSheets.spreadsheets.values.get({
    spreadsheetId,
    range: `Sheet1!A${(page - 1) * 500 + 1}:Z${page * 500}`,
  });

  return response.data;
};

async function getAllLayoff(page = 1) {
  try {
    const spreadsheet = await getSpreadSheet(page);

    const values = spreadsheet.values;

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
    const response = await googleSheets.spreadsheets.get({
      spreadsheetId,
      ranges: "Sheet1!A:Z",
    });

    let totalCount = response.data.sheets[0].properties.gridProperties.rowCount;

    const pageSize = 500;

    return parseInt(totalCount / pageSize);
  } catch (error) {
    console.log(error);
  }
}

async function getLayoffByState(page = 1, state) {
  try {
    state = state.toLowerCase(); // Capitalizing values

    const spreadsheet = await getSpreadSheet(page);

    const values = spreadsheet.values;
    const stateLayoff = [];
    for (let i = 0; i < values.length; i++) {
      const record = values[i];
      if (record[0].toLowerCase() == state) {
        console.log("California");
        stateLayoff.push(record);
      }
    }
    return stateLayoff;
  } catch (error) {
    console.log(error);
  }
}
async function getStates() {
  const spreadsheet = await googleSheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Sheet1!A:Z",
  });

  const values = spreadsheet.data.values;
  const states = {};

  for (let i = 1; i < values.length; i++) {
    const record = values[i];
    if (record[0] in states) {
      states[record[0]]++;
    } else {
      states[record[0]] = 1;
    }
  }

  return states;
}

module.exports = {
  getAllLayoff,
  getTotalRecordCountSpreadSheet,
  getLayoffByState,
  getStates,
};
