var express = require('express');
var router = express.Router();
var cassandra = require('cassandra-driver');
var config = require('../config')
var util = require('util');

console.log(util.inspect(config));

var client = new cassandra.Client(config.cassandra);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cassandra Explorer' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
