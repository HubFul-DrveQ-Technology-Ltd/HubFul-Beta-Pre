const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

const sendVerificationEmail = (userEmail, token) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: userEmail,
        subject: 'Email Verification',
        text: `Verify your email by clicking on this link: http://yourdomain.com/verify-email?token=${token}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
