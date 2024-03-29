// Code the express app with mongodb
const mongoose = require('mongoose');
//const uri = "mongodb+srv://admin:example@products.0zociic.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://root:example@db:27017/' , 
        {useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    } 
}

module.exports = connectDB;
