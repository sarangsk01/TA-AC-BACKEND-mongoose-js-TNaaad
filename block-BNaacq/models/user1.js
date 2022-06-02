var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var user1Schema = new Schema(
  {
    name: String,
    email: String,
    age: Number,
  },
  { timestamps: true }
);

var User1 = mongoose.model('User1', user1Schema);
module.exports = User1;
