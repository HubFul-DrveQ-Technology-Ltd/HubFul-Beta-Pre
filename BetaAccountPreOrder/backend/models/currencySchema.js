const mongoose = require('mongoose');

const CurrencySchema = new mongoose.Schema({
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    exchangeRate: { type: Number, required: true }
});

module.exports = mongoose.model('Currency', CurrencySchema);
