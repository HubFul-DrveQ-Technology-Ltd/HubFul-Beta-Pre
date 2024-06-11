const express = require('express');
const betaPreOrderController = require('../controllers/betaPreOrderController');
const router = express.Router();

router.post('/', betaPreOrderController.createPreOrder);
router.get('/', betaPreOrderController.getPreOrders);

module.exports = router;
