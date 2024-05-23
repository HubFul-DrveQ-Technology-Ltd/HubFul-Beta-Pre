const express = require('express');
const forumController = require('../controllers/forumController');
const router = express.Router();

router.post('/', forumController.createForum);
router.get('/', forumController.getForums);

module.exports = router;
