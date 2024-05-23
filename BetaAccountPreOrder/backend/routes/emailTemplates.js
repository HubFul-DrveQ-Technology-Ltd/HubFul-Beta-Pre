const express = require('express');
const emailTemplateController = require('../controllers/emailTemplateController');
const router = express.Router();

router.post('/', emailTemplateController.createEmailTemplate);
router.get('/', emailTemplateController.getEmailTemplates);

module.exports = router;
