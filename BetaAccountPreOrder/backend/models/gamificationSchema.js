const mongoose = require('mongoose');

const GamificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, required: true },
    achievements: [{ type: String }]
});

module.exports = mongoose.model('Gamification', GamificationSchema);
