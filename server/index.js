const express = require('express');
const products = require('./products')
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
require('dotenv/config');

const app = express();

// get all products
app.get('/api/products', (req, res) => {
    res.send(products);
});

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(routes);


mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Mongo DB Atlas Connection Established");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{console.log(`Server started on Port: ${PORT}`)});