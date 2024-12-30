const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  /* This line of code is checking for the presence of a token in the incoming request. It first tries
  to access the token from the cookies in the request (`req.cookies.token`). If the token is not
  found in the cookies, it then attempts to extract the token from the authorization header in the
  request (`req.headers.authorization`). */
  const token = req.cookies.token || req.headers.authorization?.split(" ")[ 1 ];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlackListed = await userModel.findOne({token: token})
  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
