const mongoose = require('mongoose');

const RecurringTransactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    interval: { type: String, required: true }, // e.g., 'monthly', 'weekly'
    description: { type: String, required: true },
    startDate: { type: Date, required: true }
});

module.exports = mongoose.model('RecurringTransaction', RecurringTransactionSchema);
