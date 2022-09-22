const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const colors = require('colors');

// load env vars
dotenv.config({ path: './config/config.env' });

// connect to DB
connectDB();

// Route
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body parser
app.use(express.json());

// Mount routes
app.use('/api/v1/bootcamps', bootcamps);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  );
});

// Handle unhandled promise reject
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.underline);
  // close server
  server.close(() => process.emit(1));
});
