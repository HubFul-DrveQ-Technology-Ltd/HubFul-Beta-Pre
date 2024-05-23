const express = require('express');
const meetingController = require('../controllers/meetingController');
const router = express.Router();

router.post('/', meetingController.createMeeting);
router.get('/', meetingController.getMeetings);

module.exports = router;
