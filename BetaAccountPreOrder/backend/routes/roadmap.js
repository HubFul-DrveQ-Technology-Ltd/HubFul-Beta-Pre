const express = require('express');
const roadmapController = require('../controllers/roadmapController');
const router = express.Router();

router.post('/', roadmapController.createRoadmap);
router.get('/', roadmapController.getRoadmaps);

module.exports = router;
