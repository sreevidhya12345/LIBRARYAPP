const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Libraryapp');
const Schema = mongoose.Schema;

var NewUserData = new Schema({

    name: String,
    username: String,
    password: String,

});

var UserData = mongoose.model('userdatas',NewUserData);

module.exports=UserData;