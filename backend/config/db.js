const mongoose = require('mongoose');

const connectDB = async () => {

    const MONGO_URI = "mongodb://admin:admin@mongo:27017/properties?authSource=admin";
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;