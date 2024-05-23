const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.get('/dashboard', adminController.getDashboardData);
router.get('/preorders', adminController.getPreOrders);

module.exports = router;
