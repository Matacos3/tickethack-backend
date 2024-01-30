var express = require('express');
var router = express.Router();

const Trip = require("../models/trips") 



router.get('/',(req,res)=>{
    Trip.find({arrival : req.body.arrival, departure : req.body.departure, date : req.body.date}).then(allTrips =>
    res.json({result: true, allTrips})
    )
})


  

module.exports = router;