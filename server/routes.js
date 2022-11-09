const express = require('express');
// const productSchema = require('./models/product')

const router = express(); //can be called anything, not just router

const productSchema = require('./models/product'); 
// const orderSchema = require('./models/orders');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const addUser = require('./models/addUser');
const product = require('./models/product');
const userSchema = require('./models/userSchema');

// NEW USER
router.post('/api/addclient', (req, res) =>{

   const newUser = new addUser({
        email: req.body.email, 
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
    const findUser = await userSchema.findOne({
        email: req.body.email
    });
    if(findUser){
        if(await bcrypt.compare(req.body.password, findUser.password)){
            const userToken = jwt.sign({
                email: req.body.email
            }, '883Xc7F@1dkK') 

            return res.json({status: "Ok", email: userToken});
        }else{
            res.json({email: false})
        }
    }else{
        res.json({msg: "User not found"})
    }
});


router.post('/api/verifytoken', async (req,res) =>{
    const token = req.body.token;
    const decode = jwt.verify(token, '883Xc7F@1dkK');
    const findUser = await addUser.findOne({
        username: decode.username
    });
    if(findUser){
        res.json({status: "ok", verified: true})
    }else{
        res.json({status: "bad", verified: false})
    }
});

router.post('/api/newProduct', (req, res) => {
    const newProduct = new productSchema ({
        productName: req.body.productName,
        inStock: req.body.inStock,
        availStock: {
            size: req.body.availStock.size,
            qty: req.body.availStock.qty,
            material: req.body.availStock.material,
            colour: req.body.availStock.colour
        },
        cost: req.body.cost,
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
    const findProducts = await productSchema.find();
    console.log(findProducts)
    res.json(findProducts)
});

//one product
router.get('/api/oneProduct/:id', async (req, res) => {
    const findProduct = await newProductModel.findById(req.params.id);
    res.json(findProduct)
});

//update product
router.patch('/api/updateProduct/:id', async (req, res) => {
    console.log(req.body);
    let stock = +req.body.varOne + +req.body.varTwo + +req.body.varThree + +req.body.varFour

    const updProduct = await productSchema.updateOne (
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
    res.json(updProduct);
});

//delete a product
router.delete('/api/deleteProduct/:id', async (req, res) => {
    const delProduct = await newProductModel.remove({_id: req.params.id});
    res.json(delProduct);
});

module.exports = router;