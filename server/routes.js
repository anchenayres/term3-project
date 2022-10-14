const express = require('express');
// const productSchema = require('./models/product')

const router = express(); //can be called anything, not just router

const productSchema = require('./models/product'); 
// const orderSchema = require('./models/orders');
const clientSchema = require('./models/addUsers');

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

router.post('/api/newProduct', (req, res) => {
    const newProduct = new newProductModel ({
        name: req.body.name,
        stock: req.body.stock,
        price: req.body.price,
        availStock: {
            size: req.body.availStock.size,
            quantity: req.availStock.body.quantity,
            material: req.body.availStock.material,
            colour: req.body.availStock.colour
        },
        description: req.body.description
    })

    newProduct.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There is an error with the new product", err});
    })
});

//all products
router.get('/api/allProducts', async (req, res) => {
    const findProducts = await newProductModel.find();
    res.json(findProducts)
});

//one product
router.get('/api/oneProduct/:id', async (req, res) => {
    const findProduct = await newProductModel.findById(req.params.id);
    res.json(findProduct)
});

//update product
router.get('/api/updateProduct/:id', async (req, res) => {
    console.log(req.body);
    let stock = +req.body.varOne + +req.body.varTwo + +req.body.varThree + +req.body.varFour

    const findProduct = await newProductModel.updateOne (
        {_id: req.params.id},
        {$set: {
            name: req.body.name,
            stock: req.body.stock,
            price: req.body.price,
            availStock: {
                size: req.body.varOne,
                quantity: req.body.varTwo,
                material: req.body.varThree,
                colour: req.body.varFour
            },
            description: req.body.description
        }}
    );
    res.json(findProduct);
});

//delete a product
router.delete('/api/deleteProduct/:id', async (req, res) => {
    const findProduct = await newProductModel.remove({_id: req.params.id});
    res.json(findProduct);
});

module.exports = router;