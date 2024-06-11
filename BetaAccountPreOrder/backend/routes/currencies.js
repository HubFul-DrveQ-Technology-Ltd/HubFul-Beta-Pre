const express = require('express');
const currencyController = require('../controllers/currencyController');
const router = express.Router();

router.post('/', currencyController.createCurrency);
router.get('/', currencyController.getCurrencies);

module.exports = router;
