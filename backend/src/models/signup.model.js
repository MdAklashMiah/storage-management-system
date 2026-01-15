const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is require"]
        },
        email: {
            type: String,
            required: [true, "Email is require"],
            unique: [true, "This email already exist"]
        },
        password: {
            type: String,
            required: [true, "Password is require"]
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("User", userSchema)