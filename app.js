//require("dotenv").config() 
require("./models/connection") 

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//const cors = require("cors")
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var TripsRouter = require('./routes/trips');
var CartsRouter = require('./routes/cart');
var BookingRouter = require('./routes/booking');


var app = express();
const cors = require ('cors')
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/trips',TripsRouter);
app.use('/cart', CartsRouter);
app.use('/booking',BookingRouter);


module.exports = app;
