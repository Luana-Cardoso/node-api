const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')

const mongoose = require("mongoose")

const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
     
mongoose.connect("mongodb+srv://mongo-user:useMongo@bootcamp.fmavv.mongodb.net/User?retryWrites=true&w=majority",  { useNewUrlParser: true,  useUnifiedTopology: true })

app.use(bodyParser.json());
app.use(cors())

const users = {

}

app.use("/", require('./src/routes'))