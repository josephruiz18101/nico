const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', CommentSchema);
