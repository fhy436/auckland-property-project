const asyncHandler = require("express-async-handler")

const House = require("../models/houseSchema");

// @desc Get houses
// @route GET /api/houses
// @access Private
const getHouses = asyncHandler(async (req, res) => { 
    const houses = await House.find();
    res.status(200).json(houses);
});


// @desc Set houses
// @route POST /api/houses
// @access Private
const setHouse = async (req, res) => { 
    if (!req.body.name || !req.body.address || !req.body.suburb || !req.body.price || !req.body.bathrooms) {
        return res.status(400).json({
          success: false,
          error: "Please enter all fields",
        });
      }
    
      const house = await House.create({
        name: req.body.name,
        address: req.body.address,
        suburb: req.body.suburb,
        price: req.body.price,
        bathrooms: req.body.bathrooms,
        bedrooms: req.body.bedrooms,
      });
      res.status(200).json(house);
    };


module.exports = {
    getHouses,
    setHouse
}