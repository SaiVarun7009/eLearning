const mongoose = require("mongoose");
const { type } = require("os");
const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        
    },
    collegename:{
        type:String,
    },
    YearOfPassOut:{
        type:String
    },
    emailid:{
        type:String,
        required: true
    },
    phonenum:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    cnfpassword:{
        type:String,
        required: true
    }
})

const register = new mongoose.model("Register", studentSchema);

module.exports = register;