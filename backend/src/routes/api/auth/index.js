const express = require("express")
const { signupController, loginController } = require("../../../controllers/authController")
const routes = express.Router()
console.log("signup route is working")

routes.post("/signup", signupController)

routes.post("/login", loginController)


module.exports = routes