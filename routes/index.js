var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage');
});
router.get('/donate', function(req, res, next) {
  res.render('donate');
});
router.get('/products', function(req, res, next) {
  res.render('products');
});
router.get('/donate', function(req, res, next) {
  res.render('donation');
});
router.get('/confirmed', function(req, res, next) {
  res.render('ty');
});
module.exports = router;
