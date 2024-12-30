const mongoose = require('mongoose')
const { estimatedDocumentCount } = require('./blackListToken.model')
const bcryt = require('bcryt')
const jwt = require('jwt')
const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First name should be at least 3 characters long"]
        },
        lastname: {
            type: String,
            minlength: [3, "Last name should be at least 3 characters long"]
        }
        ,
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: [3, "Email should be at least 5 characters long"],
        }
        ,
        password: {
            type: String,
            required: true,
            select: false,
            minlength: [6, "Password should be at least 6 characters long"]
        },
        socketId: {
            type: String,
        }
        ,
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "inactive",
        }, 
        vehicle: {
            color: {
                type: String,
                required: true,
                minlength: [3, "Color should be at least 3 characters long"]
            },
            plate: {
                type: String,
                required: true,
                minlength: [6, "Plate number should be at least 6 characters long"]
            },
            capacity : {
                type: Number,
                required: true,
                min: [1, "Capacity should be at least 1 passenger"]
            },
            vehicleType : {
                type: String,
                required: true,
                enum: ["car", "auto", "motorcycle"],
            } 
        },
        location : {
           lat : {
            type : Number
           },
           lng : {
            type : Number
           }
        }
    }
})


captionSchema.methods.genrateAuthToken = function (){

}

