var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var user2Schema = new Schema(
  {
    name: String,
    email: String,
    age: Number,
  },
  { timestamps: true }
);

var User2 = mongoose.model('User2', user2Schema);
module.exports = User2;
