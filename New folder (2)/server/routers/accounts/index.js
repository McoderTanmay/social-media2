const express = require('express')
const Route = express.Router()
const userController = require('../../controllers/users')

Route.post('/signUp',userController.signin);
Route.post('/login',userController.login);
Route.get('/get-username/:_id',userController.getUserName);

module.exports = Route;