const express = require("express")
const { signupController } = require("../../../controllers/authController")
const routes = express.Router()
console.log("signup route is working")

routes.post("/signup", signupController)


module.exports = routes