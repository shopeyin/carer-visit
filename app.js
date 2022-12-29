const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.use(cors());

const serviceUserRoutes = require('./routes/serviceUserRoutes');
const carerRoutes = require('./routes/carerRoutes');
const getPrivateDataRoute = require('./routes/privateRoute');
const taskRoutes = require('./routes/taskRoute');
const visitRoutes = require('./routes/visitRoute');
const visitInformationRoutes = require('./routes/visitInformationRoute');

//MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    let filePath = path.resolve(__dirname, 'client/build', 'index.html');

    res.sendFile(filePath);
  });
}

app.use(express.json());

// custom middleware
app.use((req, res, next) => {
  // eslint-disable-next-line prettier/prettier
  console.log('middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

app.use('/api/v1/serviceusers', serviceUserRoutes);
app.use('/api/v1/carers', carerRoutes);
app.use('/api/v1/task', taskRoutes);
app.use('/api/v1/visit', visitRoutes);
app.use('/api/v1/visitInformation', visitInformationRoutes);
app.use('/api/v1/private', getPrivateDataRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;

// 2v2h8Hl2jtGRikEl
