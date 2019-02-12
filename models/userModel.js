const mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

const UserSchcema = new mongoose.Schema({
    username: String,
    password:String
});

UserSchcema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchcema);