var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var article1Schema = new Schema(
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

var Article1 = mongoose.model('Article1', article1Schema);
module.exports = Article1;
