const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

router.post('/', blogController.createBlogPost);
router.get('/', blogController.getBlogPosts);
router.delete('/:id', blogController.deleteBlogPost);

module.exports = router;
