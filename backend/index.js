const express = require("express")
require('dotenv').config()
const connectDB = require("./src/config/DBconfig")
const routes = require("./src/routes")
const app = express()

PORT = process.env.PORT || 4000

connectDB

app.use(routes)



app.listen(PORT,()=>{
    console.log(`server is running port: ${PORT}`)
})




