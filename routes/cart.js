var express = require('express');
const Cart = require('../models/cart');
const Trip = require("../models/trips")
var router = express.Router();


//ajouter un voyage dans le panier
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

//afficher tout ce qui est dans la BDD cart, pour afficher tout le panier dans booking

router.get("/", (req, res)=>{
    Cart.find()
    .populate("trip")
    .then(data =>{
        res.json({result : data})
    })
})


//route pour effacer un voyage  du panier

router.delete('/:id', (req, res) => {

    Cart.deleteOne({_id : req.params.id}).then(()=>{
        Cart.find().then(data =>{
            res.json({remainingTrips : data})
        })
    })

}
);

//route pour enlever tous les voyages du panier, quand on veut valider le panier
router.delete("/",(req, res)=>{
    Cart.deleteMany().then(()=>{
        Cart.find().then(data =>{
            res.json({trips : data})
        })
    })
    

})

module.exports = router;









