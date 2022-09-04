const express = require('express');
const productSchema = require('./models/products')

const router = express(); //can be called anything, not just router


router.post('/api/addproduct', (req, res) =>{
    const newProduct = new productSchema({
        productName: req.body.productName,
        inStock: req.body.inStock, //don't define anything for DATE
        availStock: req.body.availStock,
        cost: req.body.cost,
        description: req.body.description
    });

    newProduct.save() //sends information to the MongoDB
    .then(item => {
        res.json(item);
    }) 
    .catch(err => {
        res.status(400).json({msg: "There was an error", err:err})
    })
});


//get all products
router.get('/api/allproducts', async (req, res) =>{
    const findProducts = await productSchema.find();
    res.json(findProducts);
});



module.exports = router;