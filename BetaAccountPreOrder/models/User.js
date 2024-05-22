const User = require('../models/User');

exports.getDashboardData = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments({});
        const verifiedUsers = await User.countDocuments({ isVerified: true });
        res.json({ totalUsers, verifiedUsers });
    } catch (error) {
        res.status(500).send('Server error');
    }
};
