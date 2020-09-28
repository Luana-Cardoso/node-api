const mongoose = require("mongoose")

const PersonaSchema = new mongoose.Schema(
    {
        owner: { //Vinculando user a persona
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        name:{
            type: String
        },
        sex:{
            type: String
        },
        age:{
            type: String
        },
        position:{
            type: String
        },
        workplace:{
            type: String
        },
        scholarship:{
            type: String
        },
        comunication_means:{
            type: String
        },
        goals:{
            type: String
        },
        problems:{
            type: String
        },
        company_suport:{
            type: String
        },
        staff:{
            type: String
        },
        company_field:{
            type: String
        },
        image:{
            type: String
        },
    },
    {
        timestamps:true
    }
)


module.exports = mongoose.model("Persona", PersonaSchema)