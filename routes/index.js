//Require our node packages
var express = require('express');
var request = require('request');
var router = express.Router();

/* GET the index page. */
router.get('/', function(req, res, next) {
  
  //Make our GET request
  request('http://api.openweathermap.org/data/2.5/weather?zip=28403,us&units=imperial&appid=652444958803da77800a6313546a40db', function(err, response, body){
    if (err) throw err;

    //Get the current date and create corresponding variables
    var dateTime = new Date();
    var dd = dateTime.getDate();
    var yyyy = dateTime.getFullYear();
    var hh = dateTime.getHours();
    var nn = dateTime.getMinutes();

    //Pad the minutes if necessary
    if (parseInt(nn) < 10) nn = "0" + nn.toString();

    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    //Our fullDate object that will be passed to the view
    var fullDate = {
      dd: dd,
      mm: monthNames[dateTime.getMonth()],
      yyyy: yyyy,
      hh: hh,
      nn: nn
    }

    //Render the index template. We also pass the title, weather data, and the fullDate object
    res.render('index', { title: 'Wilmington, NC', weatherData: JSON.parse(body), fullDate: fullDate });
  });
});

module.exports = router;
