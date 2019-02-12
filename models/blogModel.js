const mongoose = require('mongoose');

const BlogSchcema = new mongoose.Schema({
    title: { type: String, required: "Cannot be empty" },
    comSentences: { type: String, required: "Cannot be empty" },
    comImage: { type: String, required: "Cannot be empty" },
    blog: { type: String, required: "Cannot be empty" },
    date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Blog', BlogSchcema);