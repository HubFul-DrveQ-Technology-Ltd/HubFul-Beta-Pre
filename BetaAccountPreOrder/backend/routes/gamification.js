const express = require('express');
const gamificationController = require('../controllers/gamificationController');
const router = express.Router();

router.post('/', gamificationController.createGamification);
router.get('/', gamificationController.getGamifications);

module.exports = router;
