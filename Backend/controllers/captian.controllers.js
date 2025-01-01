const captainModel = require("../models/captain.model");
const captianService = require("../services/captian.service");
const { validationResult } = require("express-validator");
const blacklistToken = require("../models/blackListToken.model");

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


module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await captain.comparePassword(password, captain.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = captain.genrateAuthToken();
    res.cookie('token',token);
    res.status(200).json({ captain, token });
}

module.exports.getCaptainProfile = async (req, res) => {
    res.status(200).json(req.captain);
}

module.exports.logoutCaptain = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    await blacklistToken.create({ token });
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successfully" });
}

