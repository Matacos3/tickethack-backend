var express = require('express');
const Booking = require('../models/booking');
const Cart = require("../models/cart")
var router = express.Router();

//route get, pour afficher sur toute la page
router.get('/', (req,res) => {
    Booking.find()
    .populate("trip")
    .then( data =>{
        res.json({bookedTrips : data })
    })
    
});


//route post, pour que tout ce qui est dans le cart devienne un item
router.post ('/',(req,res) => {
    Cart.find().then( data => {
        for(let i = 0; i < data.length; i++){
            const newBooking = new Booking({
                trip : data[i].trip._id
            })

            newBooking.save().then(() =>{
                console.log("saved");
            })
        }
        Booking.find().then(bookedTrips =>{
            res.json({bookedTrips : bookedTrips})
        })
    })
});    






module.exports = router;


