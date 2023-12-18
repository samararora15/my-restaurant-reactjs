const express = require('express');
const Model = require('../models/orderModel')

const router = express.Router();

router.post('/add',(req,res)=>{
    // res.send('response from user add')
    console.log(req.body);
    
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall',(req,res) =>{
    // res.send('response from user getall');

    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;