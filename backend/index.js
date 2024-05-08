require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const {authenticateDB} = require('./database/db')
authenticateDB()
app.use(cors());


app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
