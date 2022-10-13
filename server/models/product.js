const mongoose = require('mongoose');


const productSchema = mongoose.Schema ({
    productName: {
        type: String,
        required: true,
    },
    inStock: {
        type: Number,
        required: true,
    },
    availStock: [
        {
            size: {
                type: String,
                required: true,
            },
            qty: {
                type: Number,
                required: true,
            },
            material: {
                type: String,
                required: true,
            },
            colour: {
                type: String,
                required: true,
            }
        }
    ],
    cost: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }   
});

module.exports = mongoose.model('product', productSchema); // ADD products orders users (no schema in users)

