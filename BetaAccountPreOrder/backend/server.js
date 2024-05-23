const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/users');
const betaPreOrderRoutes = require('./routes/betaPreOrders');
const blogPostRoutes = require('./routes/blogPosts');
const notificationRoutes = require('./routes/notifications');
const transactionRoutes = require('./routes/transactions');
const recurringTransactionRoutes = require('./routes/recurringTransactions');
const auditRoutes = require('./routes/audit');
const currencyRoutes = require('./routes/currencies');
const emailTemplateRoutes = require('./routes/emailTemplates');
const referralRoutes = require('./routes/referrals');
const gamificationRoutes = require('./routes/gamification');
const forumRoutes = require('./routes/forum');
const exclusiveContentRoutes = require('./routes/exclusiveContent');
const feedbackProgramRoutes = require('./routes/feedbackProgram');
const roadmapRoutes = require('./routes/roadmap');
const meetingRoutes = require('./routes/meetings');
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
app.use('/beta-preorders', betaPreOrderRoutes);
app.use('/blogposts', blogPostRoutes);
app.use('/notifications', notificationRoutes);
app.use('/transactions', transactionRoutes);
app.use('/recurring-transactions', recurringTransactionRoutes);
app.use('/audit', auditRoutes);
app.use('/currencies', currencyRoutes);
app.use('/email-templates', emailTemplateRoutes);
app.use('/referrals', referralRoutes);
app.use('/gamification', gamificationRoutes);
app.use('/forum', forumRoutes);
app.use('/exclusive-content', exclusiveContentRoutes);
app.use('/feedback-program', feedbackProgramRoutes);
app.use('/roadmap', roadmapRoutes);
app.use('/meetings', meetingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

