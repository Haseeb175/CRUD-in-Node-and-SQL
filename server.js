const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// configure
dotenv.config({ path: './config/.env' })

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// test route
app.get("/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Test Route Working Successfully"

    })
})

// port
const port = process.env.PORT;

// lister
app.listen(port, () => {
    console.log(`App is Running in ${port} port`);
})