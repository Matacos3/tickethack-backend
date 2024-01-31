var express = require('express');
const Cart = require('../models/cart');
const Trip = require("../models/trips")
var router = express.Router();

router.get('/:id', (req,res)=>{
   //vérifier si le voyage est déjà dans le panier ou pas 

   Cart.findOne({trip : req.params.id}).then(result =>{
    if (result){
        res.json({result: false, error: "trip already in cart"})
    } else{
        const newCart = new Cart ({
            trip: req.params.id
        });
        console.log(newCart)
        newCart.save().then(() =>{
            console.log("saved");
            Cart.find().then( data =>{
                res.json({cart : data})
            })
        })
    }
   })
    
});

// router.get("/", (req, res)=>{
//     Cart.find().then(data =>{
//         res.json({result : data})
//     })
// })
// router.get('/cart', (req,res) =>{
//     res.json ({tripsList : Trip});
// });
    

  

// router.delete('/cart/:trip', (req, res) => {
//     const SearchTrip = Cart.find( e.trip == req.params.trip)
//     if (SearchTrip){
//         Cart = Cart.filter(e => e.trip != req.params.trip)
//         res.json ({result : true, Cart})
//     }else{
//         res.json ({result : false, error: "Trip no found"})

    
//     .catch(err =>{
//     console.error(err);
//     res.status(500).json({error: 'Erreur serveur'})
//     });

// }}
// );

module.exports = router;









