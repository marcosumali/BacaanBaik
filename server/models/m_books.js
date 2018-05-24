var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  author: String,
  publisher: String,
  image: String
},{
  timestamps: true
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;