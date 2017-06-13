var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://api.openweathermap.org/data/2.5/weather?zip=28403,us&units=imperial&appid=652444958803da77800a6313546a40db', function(err, response, body){
    if (err) throw err;
    console.log(body);
    res.render('index', { title: 'Wilmington, NC', weatherData: JSON.parse(body) });
  });
});

module.exports = router;
