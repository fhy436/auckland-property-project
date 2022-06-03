const express = require('express');
const router = express.Router();
const { getHouses, setHouse } = require('../controllers/houseController');

router.route('/').get(getHouses).post(setHouse);

module.exports = router