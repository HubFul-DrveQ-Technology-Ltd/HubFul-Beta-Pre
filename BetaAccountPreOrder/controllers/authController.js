const bcrypt = require('bcrypt');
const crypto = require('crypto');
const User = require('../models/User');
const { sendVerificationEmail } = require('../utils/email');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const emailToken = crypto.randomBytes(16).toString('hex');
        const newUser = new User({ username, email, password: hashedPassword, emailToken });
        await newUser.save();
        sendVerificationEmail(newUser.email, emailToken);
        res.status(201).send('User registered');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
};

exports.verifyEmail = async (req, res) => {
    const { token } = req.query;
    try {
        const user = await User.findOne({ emailToken: token });
        if (!user) {
            return res.status(400).send('Invalid token');
        }
        user.isVerified = true;
        user.emailToken = null;
        await user.save();
        res.send('Email verified');
    } catch (error) {
        res.status(500).send('Server error');
    }
};
