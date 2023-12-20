require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");

let URL = process.env.DB_URL

mongoose.connect(URL)


app.use(cors())
app.use(express.json())



const userRoutes = require('./src/routes/userRoutes');
app.use("/" , userRoutes)



const PORT = 8000
app.listen(PORT, () => {
    console.log('Server is runnig perfectly on port', PORT)
})
