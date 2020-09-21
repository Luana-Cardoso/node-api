const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

app.get("/", (req, res) => {
    res.send('Teste 02')
});

app.get("/02", (req, res) => {
    res.send('Teste 02')
});