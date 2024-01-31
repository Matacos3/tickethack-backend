//require("dotenv").config() 
require("./models/connection") 

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//const cors = require("cors")
const moment = require("moment")
var tripsRouter = require('./routes/trips');

var app = express();
const cors = require ('cors')
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/trips',tripsRouter);

module.exports = app;
