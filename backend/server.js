const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/houses', require('./routes/houseRoutes'));

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));