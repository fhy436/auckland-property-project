const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/house', require('./routes/houseRoutes'));

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.listen(port, () => console.log(`Listening on port ${port}`));