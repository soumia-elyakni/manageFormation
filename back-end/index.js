const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const initData = require('./database/db-init')
const routes = require('./routers/index')
const {dailyUpdates} = require('./tasks/update-status')
const {errorHandler} = require('./middlewares/errorhandler');



initData()
dailyUpdates()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', routes.authRoute)
app.use('/api/admin', routes.adminRoute)
app.use('/api/emp', routes.employeRoute)

app.use(errorHandler)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
  });

