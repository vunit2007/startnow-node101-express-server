var express = require('express');
var morgan = require('morgan');
var data = require('./data.json');

// create your express server below
var app = express()
app.use(morgan('dev'));
app.use(express.static('../startnow-web101-san-diego-top-spots/'));


app.get('/data',function(req,res){
    res.json(data)
});


// add your routes and middleware below


// finally export the express application
 module.exports = app;