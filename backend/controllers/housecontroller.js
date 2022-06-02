const asyncHandler = require("express-async-handler")
// @desc Get houses
// @route GET /api/houses
// @access Private
const getHouse = async (req, res) => { 
    if(!req.body.text)  {
        res.status(400)
        throw new Error('No text provided');
    }
    res.status(200).json({message: 'Get house'});
};


// @desc Set houses
// @route POST /api/houses
// @access Private
const setHouse = async (req, res) => { 
    res.status(200).json({message: 'Get house'});
};


// @desc Update houses
// @route PUT /api/houses/:id
// @access Private
const updateHouse = async (req, res) => { 
    res.status(200).json({message: 'Update house ${req.params.id}'});
};


// @desc Delete houses
// @route DELETE /api/houses/:id
// @access Private
const deleteHouse = async (req, res) => { 
    res.status(200).json({message: 'Delete house ${req.params.id}'});
};

module.exports = {
    getHouse,
    setHouse,
    updateHouse,
    deleteHouse
}