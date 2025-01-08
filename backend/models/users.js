const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    roleType:{
        type: String,
        required: true,
    },
});

UserSchema.pre('save', async function(next) {
   if(this.isModified('password')){
    return next();
   } 
   this.password = CryptoJS.SHA512(this.password).toString();
   next();
});

UserSchema.method.matchPassword = async function(enteredPassword) {
    const hashPassword = CryptoJS.SHA512(enteredPassword).toString();
    return hashedPassword === this.password;
};

module.exports = mongoose.model('User', UserSchema);