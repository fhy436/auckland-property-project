const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const { connect } = require('./routes/houseRoutes');
const port = process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/house', require('./routes/houseRoutes'));

app.listen(port, () => console.log(`Listening on port ${port}`));