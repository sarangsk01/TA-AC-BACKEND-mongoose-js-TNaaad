var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var comment1Schema = new Schema(
  {
    content: String,
    author: Schema.Types.ObjectId,
    article: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

var Comment1 = mongoose.model('Comment1', comment1Schema);
module.exports = Comment1;
