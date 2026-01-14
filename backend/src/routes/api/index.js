const express = require("express")
const routes = express.Router()
const auth = require("./auth")

console.log("api routes is working")

routes.use("/auth", auth)




module.exports = routes

