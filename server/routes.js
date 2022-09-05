const express = require('express');
const productSchema = require('./models/product')

const router = express(); //can be called anything, not just router

const productSchema = require('./models/products');
const orderSchema = require('./models/orders');
const clientSchema = require('./models/clients');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/api/addclient', (req, res) =>{
   const newUser = new clientSchema({
        username: req.body.username, 
        password: req.body.password 
    }); 
    newUser.save()
    .then(item => {
        res.json(item)
    })
    .catch(err => {
       res.status(400).json({msg:"There is an error", err}); 
    });
});

router.post('/api/loginuser', async (req,res) => {
    const findUser = await clientSchema.findOne({
        username: req.body.username
    });
    if(findUser){
        if(await bcrypt.compare(req.body.password, findUser.password)){
            const userToken = jwt.sign({
                username: req.body.username
            }, '883Xc7F@1dkK') 

            return res.json({status: "Ok", user: userToken});
        }else{
            res.json({user: false})
        }
    }else{
        res.json({msg: "User not found"})
    }
});


router.post('/api/verifytoken', async (req,res) =>{
    const token = req.body.token;
    const decode = jwt.verify(token, '883Xc7F@1dkK');
    const findUser = await clientSchema.findOne({
        username: decode.username
    });
    if(findUser){
        res.json({status: "ok", verified: true})
    }else{
        res.json({status: "bad", verified: false})
    }
});









module.exports = router;