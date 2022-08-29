const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const cors = require('cors');
require('dotenv/config');

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