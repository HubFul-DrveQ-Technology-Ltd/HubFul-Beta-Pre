const stripe = require('stripe')('your-stripe-secret-key');

app.post('/api/payment', async (req, res) => {
    const { amount, token } = req.body;
    try {
        await stripe.charges.create({
            amount,
            currency: 'usd',
            source: token.id,
            description: 'HubFul Beta Account Pre-Order',
        });
        res.send({ message: 'Payment successful!' });
    } catch (error) {
        res.status(500).send({ error: 'Payment failed!' });
    }
});
