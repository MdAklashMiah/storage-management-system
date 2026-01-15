const express = require("express")
require('dotenv').config()
const cors = require("cors");
const connectDB = require("./src/config/DBconfig")
const routes = require("./src/routes")
const app = express()

PORT = process.env.PORT || 4000

app.use(cors());
app.use(express.json());

connectDB

app.use(routes)



app.listen(PORT,()=>{
    console.log(`server is running port: ${PORT}`)
})




