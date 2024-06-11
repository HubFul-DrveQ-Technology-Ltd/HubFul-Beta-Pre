const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

router.post('/blogPosts', blogController.createBlogPost);
router.get('/blogPosts', blogController.getBlogPosts);
router.delete('/blogPosts/:id', blogController.deleteBlogPost);

module.exports = router;
