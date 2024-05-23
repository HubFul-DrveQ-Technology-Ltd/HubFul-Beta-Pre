const User = require('../models/User');
const BetaPreOrder = require('../models/BetaPreOrder');

exports.getDashboardData = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments({});
        const verifiedUsers = await User.countDocuments({ isVerified: true });
        const totalPreOrders = await BetaPreOrder.countDocuments({});
        res.json({ totalUsers, verifiedUsers, totalPreOrders });
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.getPreOrders = async (req, res) => {
    try {
        const preOrders = await BetaPreOrder.find({});
        res.json(preOrders);
    } catch (error) {
        res.status(500).send('Server error');
    }
};
