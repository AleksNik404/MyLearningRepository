const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRoute = require('./routes/tourRoutes');
const userRoute = require('./routes/userRoutes');
const reviewRoute = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRouter');
const viewRoute = require('./routes/viewRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES

// Serving static fields
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(`${__dirname}/public`));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests fro same API
const limiter = rateLimit({
  max: 100,
  windowMs: 1000 * 60 * 60,
  message: 'Too many requests from this IP, please try again in an hour!',
});

app.use('/api', limiter);

// Body parser, reading dat`a from body into rq.body
app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: true, limit: '10kb' })); // middleware
app.use(cookieParser());

// Data sanitization agains NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevet parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

app.use(compression());

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/', viewRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/bookings', bookingRouter);

app.all('*', (req, res, next) => {
  next(
    new AppError(`HEEELL Can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;
