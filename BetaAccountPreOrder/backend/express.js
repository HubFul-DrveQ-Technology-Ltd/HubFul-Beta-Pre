router.get('/verify-email', async (req, res) => {
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
});
