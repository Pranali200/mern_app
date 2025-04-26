const mongoose = require('mongoose')


const connectDB = async () =>{

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Mongoose Connected')
    }catch(error){
        console.log('MonoDB connection failed:', error.message)
        process.exit(1)
    }
};

module.exports = connectDB