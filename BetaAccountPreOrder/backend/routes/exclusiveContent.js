const express = require('express');
const exclusiveContentController = require('../controllers/exclusiveContentController');
const router = express.Router();

router.post('/', exclusiveContentController.createExclusiveContent);
router.get('/', exclusiveContentController.getExclusiveContents);

module.exports = router;
