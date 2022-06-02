const mongoose = require('mongoose');

const houseSchema = mongoose.Schema (
    {
        name: String,
        address: String,
        suburb: String,
        image: String,
        price: Number,
        bathrooms: Number,
        bedrooms: Number
    }, 
    {
        timestamps: true
    }
);

modules.exports = mongoose.model('House', houseSchema);