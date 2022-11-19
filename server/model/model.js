const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    task : {
        type: String,
        required: true,
        unique: true
    },
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;