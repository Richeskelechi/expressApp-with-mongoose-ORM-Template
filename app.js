require('dotenv').config()
const winston = require("winston");
const express = require("express");
const connectDB = require('./db/connectDB')
const app = express();

require("./startup/logging")();
require("./startup/cors")(app)
require("./startup/allRoutes")(app);
require("./startup/validation")();
require("./startup/prod")(app);

const port = process.env.PORT || 3000
let server

const start = async () => {
    try {
        const db = process.env.DB_STRING
        await connectDB(db)
        server = app.listen(port, () => {
            winston.info(`Listening now on port ${port}... And Database Is Connected`)
            console.log(`Listening now on port ${port}... And Database Is Connected`)
        })
    } catch (error) {
        console.log(error);
    }
}
//Here Above I am starting the App And Database
start()

module.exports = server;