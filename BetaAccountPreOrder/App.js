const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const blogRoutes = require('./routes/blogRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const securityMiddleware = require('./middlewares/security');
const logger = require('./middlewares/logger');
require('dotenv').config();

const app = express();

securityMiddleware(app);
app.use(logger);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch((error) => console.error('Database connection error:', error));

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/api', blogRoutes);
app.use('/api', meetingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
