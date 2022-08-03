const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Libraryapp');
const Schema = mongoose.Schema;

var NewBookData = new Schema({
    bookId : Number,
    bookName : String,
    author : String,
    description : String,
    price : Number,
    starRating :Number,
    
});

 var Bookdata = mongoose.model('booklists', NewBookData);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;