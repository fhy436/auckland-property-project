const express = require('express');
const router = express.Router();
const { getHouse, setHouse, updateHouse, deleteHouse} = require('../controllers/houseController');

router.route('/').get(getHouse).post(setHouse);
router.route('/:id').put(updateHouse).delete(deleteHouse);

module.exports = router