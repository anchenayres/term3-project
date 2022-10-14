const mongoose = require('mongoose');

const newProduct = new newProductsModel ({
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


module.exports = mongoose.model('product', addProduct); 
