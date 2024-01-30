var express = require('express');
const mongoose = require('mongoose')
//const { isValidObjectId } = require('mongoose');
const Cart = require('../models/cart');
var router = express.Router();

router.post ('/cart', (req,res)=>{
    const newCart = new Cart
    newCart.save().then(() => {
        console.log('Cart saved!');
       });
})

Cart.find()
 .populate('carts')
 .then(data => {
   console.log(data);
 });









