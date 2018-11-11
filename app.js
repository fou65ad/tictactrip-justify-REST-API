var express = require('express');
var app = express();
var db = require('./db');


var UserController = require('./user/UserController');
app.use('/users', UserController);

var AuthController = require('./auth/AuthController');
app.use('/api', AuthController);

app.get('/', function (req, res) {
  welcome = "<h1>Bonjour Tictactrip , pour tester cette API cliquer sur ce lien</h1>";
  fouad = "<h2>Bouarourou Fouad : bouarourou.fouad@gmail.com</h2>";
  res.send(welcome+fouad)
})


module.exports = app;

