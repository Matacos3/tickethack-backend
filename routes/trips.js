var express = require('express');
var router = express.Router();

const User = require("../models/trips") 



router.get('/trips',(req,res)=>{
    trips.find().then(allTrips =>
    res.json({result: true, allTrips})
    )}
  )

  router.get('/trips'),(req,res)=>{
    trips.find(req.body.departure)
  
  }

  module.exports = router;