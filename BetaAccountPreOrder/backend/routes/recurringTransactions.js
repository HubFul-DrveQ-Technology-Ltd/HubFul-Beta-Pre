const express = require('express');
const recurringTransactionController = require('../controllers/recurringTransactionController');
const router = express.Router();

router.post('/', recurringTransactionController.createRecurringTransaction);
router.get('/', recurringTransactionController.getRecurringTransactions);

module.exports = router;
