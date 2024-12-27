mongod
const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minlength : [
                3,
                'First name should be at least 3 characters long'
            ]
        },
        lastName:{
            type:String,
            minlength : [
                3,
                'Last name should be at least 3 characters long'
            ]
        },
        email:{
            type:String,
            required:true,
            unique: true,
            minlength : [
                3,
                'email should be at least 5 characters long'
            ]
        }
    },
    password :{
        type:String,
        required:true,
    },
    socketId:{
        type:String,
    }
    
})