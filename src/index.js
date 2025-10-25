const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const connectToDb = require('./config/database');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);

connectToDb()
  .then(() => {
    console.log('DATABASE CONNECTION SUCCESSFUL.');
    app.listen(7777, () => {
      console.log('APP STARTED LISTENING PORT 7777.');
    });
  })
  .catch((error) => {
    console.log('ERROR CONNECTING TO THE DATABASE: ', error.message);
  });
