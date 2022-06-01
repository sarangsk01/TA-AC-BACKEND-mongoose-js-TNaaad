var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  favorites: [String],
  marks: [Number],
  password: { type: String, minlength: 5, maxlength: 15 },
  createAt: { type: Date, default: 01 / 06 / 2022 },
});
