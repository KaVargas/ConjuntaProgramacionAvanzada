const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});

const autorSchema = new Schema({
    name: String,
    code: String
});

const bookSchema = new Schema({
    title: String,
    year: String,
    autor: autorSchema
});

module.exports = mongoose.model('tasks',TaskSchema);