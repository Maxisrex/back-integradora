const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    tPost: { type: String, required: true }
});

module.exports = mongoose.model('post', postSchema);