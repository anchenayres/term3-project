const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')
const jwt = require('jsonwebtoken');

const users = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

users.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(this.password, salt);
        this.password = hashPass;
        next();

    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('users', users);