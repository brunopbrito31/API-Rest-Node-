const express = require('express');
const routes = express.Router();

const contatoController = require('../controllers/contatoController');

routes.post("/contato",contatoController.cadastrarContato);

module.exports = routes;