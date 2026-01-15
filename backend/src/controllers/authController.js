const signupModel = require("../models/signup.model");
const bcrypt = require('bcryptjs')

const signupController = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    let existUser = await signupModel.findOne({ email });

    if (existUser) {
      return res.status(409).json({
        success: false,
        message: "Email already in use",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    let user = await signupModel({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    return res.status(201).json({
      success: true,
      message: "User register successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  signupController,
};
