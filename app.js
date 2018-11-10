var express = require('express');
var app = express();
var db = require('./db');
const client = require('redis').createClient();
const rateLimiter = require('redis-express-rate-limiter')

var UserController = require('./user/UserController');
app.use('/users', UserController);

var AuthController = require('./auth/AuthController');
app.use('/api', AuthController);




// const limiterConfigs = {
//   path: '/api/auth/justify',
//   method: 'post',
//   limitBy: 'body.token',
//   // 50 requests per hour
//   total: 3,
//   // time is in milliseconds
//   expiresIn: 1000 * 60 ,
//   decrementAmount: (req, redisInfo) => 1,
//   onRateLimited: (req, res, next) => res.sendStatus(429),
//   onError: (err, req, res, next) => res.sendStatus(500),
//   onPassThrough: res => res.sendStatus(200)
// }
// app.use(rateLimiter(limiterConfigs, client)) //you can also use many limiters each for a different route!

// app.post('/api/auth/justify', (req, res) => {
//   res.sendStatus(200)
// })

module.exports = app;