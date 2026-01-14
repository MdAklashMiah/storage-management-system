const { default: mongoose } = require("mongoose");

const connectDB = mongoose.connect(`mongodb+srv://storage-management-system:sms123456@cluster0.lll2tjr.mongodb.net/storage-management-system?appName=Cluster0`).then(()=>{
    console.log("Database Connected Successfully")
}).catch((err)=>{
    console.log(err)
})


module.exports = connectDB