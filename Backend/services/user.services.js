const userModel = require('../models/user.models');

module.exports.createUser = async({ fullname, password }) => {
    if (!fullname || !fullname.firstname || !fullname.lastname || !fullname.email || !password) {
        throw new Error('Missing required fields');
    }

    const user = userModel.create({
        fullname: {
            firstname,
            lastname,
            email,
        },
        password,
    });

    return user;
};