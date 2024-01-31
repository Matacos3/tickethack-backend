var express = require('express');
const mongoose = require('mongoose')
//const { isValidObjectId } = require('mongoose');
const Trip = require('../models/trips');
const e = require('express');
var router = express.Router();


router.get('/booking', (req,res) => {
    res.json ({tripsList : Trip})
    
});

router.post ('/booking',(req,res) => {
    Trip.push(req.body.newTrips);
    res.json({tripsList: Trip})
   });    






module.exports = router;


