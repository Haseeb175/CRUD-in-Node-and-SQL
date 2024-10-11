
// import dependency
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// import Functions
const mySqlPool = require('./config/db');

// configure
dotenv.config({ path: './config/.env' })

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// Student Route
app.use("/api/v1/student", require("./routes/studentRoutes"));

// test route
app.get("/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Test Route Working Successfully"

    })
})

// port
const port = process.env.PORT;

// conditionaly lister
mySqlPool.query("SELECT 1").then(() => {
    // MySQL Connection
    console.log("My SQL DB Connected");
    // listen
    app.listen(port, () => {
        console.log(`App is Running in ${port} port`);
    })
})
