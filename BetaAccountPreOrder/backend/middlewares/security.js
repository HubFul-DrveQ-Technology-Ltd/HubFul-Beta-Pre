const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

const securityMiddleware = (app) => {
    app.use(helmet());
    app.use(xss());
    app.use(mongoSanitize());

    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
    });

    app.use(limiter);
};

module.exports = securityMiddleware;
