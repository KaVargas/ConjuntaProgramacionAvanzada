const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const autorSchema = new Schema({
    name: String,
    code: String
});

module.exports = mongoose.model('authors',autorSchema);