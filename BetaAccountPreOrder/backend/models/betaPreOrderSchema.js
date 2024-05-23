const mongoose = require('mongoose');

const BetaPreOrderSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BetaPreOrder', BetaPreOrderSchema);
