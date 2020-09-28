const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        nome:{
            type: String,
        },
        email: {
            type: String,
            required:true,
        },
        cargo: {
            type: String,
        }
    },
    {
        timestamps:true
    }
)


module.exports = mongoose.model("User", UserSchema)