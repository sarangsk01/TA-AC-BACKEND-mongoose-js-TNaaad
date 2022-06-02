var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var comment2Schema = new Schema(
  {
    content: String,
    author: Schema.Types.ObjectId,
    article: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

var Comment2 = mongoose.model('Comment2', comment2Schema);
module.exports = Comment2;
