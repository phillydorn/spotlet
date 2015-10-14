if (!process.env.CLIENT_ID) {
  var keys = require('../keys.js');
}

var mongo = require('mongodb').MongoClient,
    mongoose = require('mongoose');
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost:27017');


var userSchema = new Schema({
    username: String,
    spotifyId: String
})

module.exports = mongoose.model('User', userSchema);