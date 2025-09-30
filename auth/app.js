const express= require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB= require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app= express();



app.use(cors({origin:'http://localhost:5000',credentials:true}));

app.use(express.json());
app.use(cookieParser());
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({error:'Something broke'});
});

app.use('/api/auth',authRoutes);

connectDB();


module.exports=app;