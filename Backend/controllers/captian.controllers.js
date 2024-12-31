const captainModel = require("../models/captain.model");
const captianService = require("../services/captian.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
const isCaptainAlreadyExists = await captainModel.findOne({email})

if (isCaptainAlreadyExists) {
    return res.status(400).json({message: 'captain already exists'})
}

    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captianService.createcaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    const token = captain.genrateAuthToken();
    res.status(201).json({ captain, token });
}

