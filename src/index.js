const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();

const port = 3350;

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
    app.use(routes);
});

app.use(express.json());

app.listen(port, () => {
    console.log('Servidor Rodando na Porta: '+port);
});