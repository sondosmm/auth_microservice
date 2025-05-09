const mongoose =require('mongoose');
const bcrypt= require('bcryptjs');

const userSchema = new mongoose.Schema({
    email:{
        type :String,
        required:[true, 'email is required'],
        unique:[true, 'email must be unique']
    },
    password:{
        type:String,
        required:[true, 'password is requird'],
    }
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password'))
        return next();
    this.password=await bcrypt.hash(this.password,12);
    next();
});

module.exports=mongoose.model('User', userSchema);