/*var express = require('express');
const mongoose = require('mongoose')
//const { isValidObjectId } = require('mongoose');
const Trip = require("../models/trips")
const e = require('express');
var router = express.Router(); router = express.Router();





router.post('/trips', (req, res) => {
    if(!req.body.departure || !req.body.arrival){
      res.json ({result : false, error : "No trip found"});
      return;}
  });

Trip.findOne({departure: req.body.departure, arrival : req.body.arrival})
  .then( data =>{
    if (data){
      res.json({result : true})

    }else{
      res.json({result: false})
    }
  })
  


  module.exports = router;*/