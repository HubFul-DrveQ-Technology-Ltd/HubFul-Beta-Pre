const Meeting = require('../models/Meeting');

exports.createMeeting = async (req, res) => {
    const { meetingTitle, date, time } = req.body;
    try {
        const newMeeting = new Meeting({ meetingTitle, date, time });
        await newMeeting.save();
        res.status(201).send('Meeting booked');
    } catch (error) {
        res.status(400).send('Error booking meeting');
    }
};

exports.getMeetings = async (req, res) => {
    try {
        const meetings = await Meeting.find({});
        res.json(meetings);
    } catch (error) {
        res.status(500).send('Server error');
    }
};
