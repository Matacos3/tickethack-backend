var express = require('express');
const mongoose = require('mongoose')
//const { isValidObjectId } = require('mongoose');
const Cart = require('../models/cart');
const e = require('express');
var router = express.Router();

router.post ('/cart', (req,res)=>{
    const newCart = new Cart ({
        trip: req.body.trip
    });
    newCart.Save().then(data => {
        if (data){
            res.json ({result : true,});
        }else{
            res.json ({result : false,});
        };
    });
});

router.get('/cart', (req,res) =>{
    res.json ({tripsList : Trip});
});
    

  

router.delete('/cart/:trip', (req, res) => {
    const SearchTrip = Cart.find( e.trip == req.params.trip)
    if (SearchTrip){
        Cart = Cart.filter(e => e.trip != req.params.trip)
        res.json ({result : true, Cart})
    }else{
        res.json ({result : false, error: "Trip no found"})

    
    .catch(err =>{
    console.error(err);
    res.status(500).json({error: 'Erreur serveur'})
    });

}}
);

module.exports = router;









