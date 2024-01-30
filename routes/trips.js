var express = require('express');
var router = express.Router();

const Trip = require("../models/trips") 



router.get('/',(req,res)=>{

  console.log(req.body.date)
    Trip.find({
    arrival : {$regex : new RegExp(req.body.arrival, "i")}, 
    departure : {$regex : new RegExp(req.body.departure,"i")}, 
    date : {$lte:,$gte : }})
    .then(allTrips =>{
    console.log(allTrips)
    if(allTrips.length!=0){
      res.json({result: true, allTrips})

    } else{
      res.json({result : false, error : "No such trips found"})
    }}
    )
})


  

module.exports = router;