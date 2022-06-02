var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var article2Schema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    likes: [String],
    author: Schema.Types.ObjectId,
    comments: [String],
  },
  { timestamps: true }
);

var Article2 = mongoose.model('Article2', article2Schema);
module.exports = Article2;
