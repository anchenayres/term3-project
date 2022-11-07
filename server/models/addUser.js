const mongoose = require('mongoose');

const addUser = mongoose.Schema({
    email: { type: String ,required: true},
    username: { type: String,required: true}
});

module.exports = mongoose.model('users', addUser);