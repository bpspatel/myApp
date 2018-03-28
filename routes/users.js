var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* SAVE USER */
router.post('/', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
