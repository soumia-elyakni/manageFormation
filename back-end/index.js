const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const initData = require('./database/db-init')


initData()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
  });

