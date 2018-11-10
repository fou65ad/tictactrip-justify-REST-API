// AuthController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../user/User');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var VerifyToken = require('./VerifyToken');
var justification = require('./justification');

var FastRateLimit = require("./fast-rate-limit").FastRateLimit;
var decr = require("./fast-rate-limit");

 
var messageLimiter = new FastRateLimit({
  threshold : config.nbrMots, // available tokens over timespan
  ttl       :config.duree  // time-to-live value of token bucket (in seconds)
});
  
router.post('/register', function(req, res) {
  
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user.")



    res.status(200).send({ "resultat":"bien enregistré" });
  }); 
});
router.post('/me', VerifyToken, function(req, res, next) {

  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    
    res.status(200).send(user);
  });

});



router.post('/login', function(req, res) {

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: config.expire 
    });

    res.status(200).send({ auth: true, token: token });
  });

});


router.post('/justify', VerifyToken, function(req, res, next) {
namespace = req.body.token;
nbr=req.body.input.split(" ").length;
decr.setDecr(nbr);
if (messageLimiter.consumeSync(namespace,decr) === true) {

  var output= justification(req.body.input,req.body.len); 

    res.status(200).send({"output":output,"consommés":nbr});
} else {

  return res.status(402).send("Payment Required");
}


});


module.exports = router;



