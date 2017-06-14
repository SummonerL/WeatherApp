var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://api.openweathermap.org/data/2.5/weather?zip=28403,us&units=imperial&appid=652444958803da77800a6313546a40db', function(err, response, body){
    if (err) throw err;
    console.log(body);

    var dateTime = new Date();
    var dd = dateTime.getDate();
    var yyyy = dateTime.getFullYear();
    var hh = dateTime.getHours();
    var nn = dateTime.getMinutes();

    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var fullDate = {
      dd: dd,
      mm: monthNames[dateTime.getMonth()],
      yyyy: yyyy,
      hh: hh,
      nn: nn
    }

    res.render('index', { title: 'Wilmington, NC', weatherData: JSON.parse(body), fullDate: fullDate });
  });
});

module.exports = router;
