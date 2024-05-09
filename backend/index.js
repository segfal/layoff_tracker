require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const {authenticateDB} = require('./database/db')
authenticateDB()

app.get('/test', (req, res) => {
  console.log("Test endpoint hit");
  res.send("Test endpoint working!");
});

app.use('/api',require('./api') )

app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
