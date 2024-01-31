var express = require('express');
var router = express.Router();

const Trip = require("../models/trips") 
const moment = require("moment")


router.post('/',(req,res)=>{
  console.log(req.body.date)
  const subDate = new Date(req.body.date)
  console.log(moment(new Date(req.body.date)).startOf("day"))
    Trip.find({
    arrival : {$regex : new RegExp(req.body.arrival, "i")}, 
    departure : {$regex : new RegExp(req.body.departure,"i")}, 
    date :{$gte : moment(subDate).startOf("day"),
          $lte : moment(subDate).endOf("day")} })
    .then(allTrips =>{
    console.log(allTrips)
    if(allTrips.length!=0){
      res.json({result: true, allTrips})

    } else{
      res.json({result : false, error : "No such trips found"})
    }}
    )
})

  router.get('/trips'),(req,res)=>{
    trips.find(req.body.departure)
  
  }

  module.exports = router;