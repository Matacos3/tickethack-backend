var express = require('express');
var router = express.Router();


const User = require("../models/trips") 



router.post('/signin', (req, res) => {
  if(!req.body.departure || !req.body.arrival){
    res.json ({result : false, error : "No trip found"});
    return;}
});



//const { checkBody } = require("../modules/checkBody") 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
