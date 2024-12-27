const mongoose = require('mongoose');
function connectToDb() {
    mongoose.connect('mongodb://0.0.0.0/uber-clone').then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}

module.exports = connectToDb;