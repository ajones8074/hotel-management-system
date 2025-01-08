const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Database has been connected"));
    } catch (error) {
        console.error(error.message ?? "Not connected to the database");
        process.exit(1);
    }
};

const useCollection = (colelctionName) => {
    return mongoose.connection.useCollection(colelctionName);
};

module.exports = connectDB;