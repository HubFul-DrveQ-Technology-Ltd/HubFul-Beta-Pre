const express = require('express');
const auditController = require('../controllers/auditController');
const router = express.Router();

router.post('/', auditController.createAudit);
router.get('/', auditController.getAudits);

module.exports = router;
