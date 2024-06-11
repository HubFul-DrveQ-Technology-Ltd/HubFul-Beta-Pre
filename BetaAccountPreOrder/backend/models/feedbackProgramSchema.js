const mongoose = require('mongoose');

const FeedbackProgramSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    feedback: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FeedbackProgram', FeedbackProgramSchema);
