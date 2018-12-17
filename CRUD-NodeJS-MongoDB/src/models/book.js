const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    code: String,
    title: String,
    year: String,
    author: String
});

module.exports = mongoose.model('books',bookSchema);