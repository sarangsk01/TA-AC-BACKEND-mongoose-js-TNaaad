var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  sports: [String],
});

var User = mongoose.model('User', userSchema);
module.exports = User;
