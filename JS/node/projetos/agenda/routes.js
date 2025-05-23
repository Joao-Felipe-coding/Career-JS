const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

//rotas da home
route.get('/', homeController.index);

//rotas de login
route.get('/login/', loginController.index)

module.exports = route;
