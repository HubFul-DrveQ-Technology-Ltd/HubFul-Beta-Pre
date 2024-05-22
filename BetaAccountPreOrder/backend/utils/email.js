const nodemailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
});

exports.sendVerificationEmail = (userEmail, token) => {
    const mailOptions = {
        from: config.email.user,
        to: userEmail,
        subject: 'Email Verification',
        text: `Verify your email by clicking on this link: http://hubful.com/verify-email?token=${token}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
