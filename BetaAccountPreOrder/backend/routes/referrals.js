const express = require('express');
const referralController = require('../controllers/referralController');
const router = express.Router();

router.post('/', referralController.createReferral);
router.get('/', referralController.getReferrals);

module.exports = router;
