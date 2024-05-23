const express = require('express');
const feedbackProgramController = require('../controllers/feedbackProgramController');
const router = express.Router();

router.post('/', feedbackProgramController.createFeedbackProgram);
router.get('/', feedbackProgramController.getFeedbackPrograms);

module.exports = router;
