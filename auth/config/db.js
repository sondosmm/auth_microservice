const mongoose=require('mongoose');

require('dotenv').config({path:'./config.env'});

const connectDB = async()=>{
    try
    {
        mongoose.connect(process.env.DB_URI);
        console.log('Database connected');
    }
    catch(err)
    {
        console.error(`database error: ${err}`);
        process.exit(1);
    }
}

module.exports=connectDB;
