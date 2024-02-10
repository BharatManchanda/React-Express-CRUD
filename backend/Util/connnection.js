const mongoose = require("mongoose");

async function moongoDB(){
    try  {
        await mongoose.connect('mongodb://127.0.0.1:27017/College');
        console.log("Database connected successfully ");
    } catch (error) {
        console.log(`Connection error: ${error}`);
    }
}

module.exports = {
    moongoDB,
}