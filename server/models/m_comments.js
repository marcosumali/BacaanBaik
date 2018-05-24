var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    bookId: {
        type: Schema.Types.ObjectId,
        ref: 'Book'
    },
    comment: String,
    vote: Number
},{
    timestamps: true
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;