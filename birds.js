const express = require('express');
const router = express.Router();

var time = new Date

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if(dd<10){
    dd = '0' + dd;
}

if(mm<10){
  mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;

router.use(function timeLog(req, res, next) {
    console.log('Time:', today);
    next();
});

router.get('/', function (req, res) {
    res.send('Birds home page');
});

router.get('/about', function (req, res) {
    res.send('About birds');
});

module.exports = router;