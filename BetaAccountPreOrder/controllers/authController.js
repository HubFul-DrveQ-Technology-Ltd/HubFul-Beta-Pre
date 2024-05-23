const jwt = require('jsonwebtoken');
const { sendPasswordResetEmail } = require('../utils/email');

exports.requestPasswordReset = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        sendPasswordResetEmail(user.email, token);
        res.send('Password reset link sent to email');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();
        res.send('Password has been reset');
    } catch (error) {
        res.status(500).send('Server error');
    }
};
