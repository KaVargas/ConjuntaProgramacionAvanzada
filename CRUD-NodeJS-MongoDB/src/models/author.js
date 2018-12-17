const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    code: String,
    name: String
});

module.exports = mongoose.model('authors',authorSchema);

