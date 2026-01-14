const express = require("express")
const routes = express.Router()
const api = require("./api")

console.log("routes is working")

routes.use("api/v1",api)

module.exports = routes