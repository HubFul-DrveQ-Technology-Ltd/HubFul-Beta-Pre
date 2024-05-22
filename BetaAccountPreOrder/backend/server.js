const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('your-mongo-db-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });

const preOrderSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    plan: String,
    price: Number,
});

const PreOrder = mongoose.model('PreOrder', preOrderSchema);

app.post('/api/preorder', async (req, res) => {
    const { name, email, address, plan, price } = req.body;
    const newPreOrder = new PreOrder({ name, email, address, plan, price });
    await newPreOrder.save();
    res.send({ message: 'Pre-order saved successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
