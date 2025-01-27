const express = require('express');
const Comment = require('../models/Comment');

const router = express.Router();

// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Post a comment
router.post('/', async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        await newComment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
