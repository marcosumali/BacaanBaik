const ModelComment = require('../models/m_comments');

module.exports = {

  save: (req, res, next) => {

    let { _id } = req.decoded;
    let bookId = req.query.id;
    let { comment, vote } = req.body;
        
    let newObj = {
      userId: _id,
      bookId,
      comment,
      vote
    }

    let newComment = new ModelComment(newObj);

    newComment.save((err,result) => {
      if (err) {
        res.status(400).json({
          message: 'Error: Bad request save new comment',
          err
        })
      } else {
        res.status(201).json({
          message: 'Save new comment successful',
          comment: result,
        })
      }
    })
  },

  getComments: (req, res, next) => {

    ModelComment.find()
      .populate('userId bookId')
      .exec()
      .then(result => {
        res.status(200).json({
          message: 'Get comments successful',
          comments: result,
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'Error: Get comments',
          err
        })
      })
  },

  getCommentsByBook: (req, res, next) => {

    let bookId = req.query.id;

    ModelComment.find({ bookId })
      .populate('userId bookId')
      .exec()
      .then(result => {
        res.status(200).json({
          message: 'Get comments by book successful',
          comments: result,
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'Error: Get comments by book',
          err
        })
      })
  },

  deleteComment: (req, res, next) => {

    let commentId = req.query.id;
    let { _id } = req.decoded;

    ModelComment.findById(commentId)
      .populate('userId bookId')
      .exec()
      .then(result => {

        if (result.userId._id == _id) {

          ModelComment.findOneAndRemove({ _id: commentId })
            .then(result => {
              res.status(200).json({
                message: 'Delete comment successful',
                deleted_comment: result
              })
            })
            .catch(err => {
              res.status(400).json({
                message: 'Error: delete comment',
                err
              })
            })

        } else {

          res.status(400).json({
            message: 'Error: You are not authorised to delete comment',
          })
        }

      })
      .catch(err => {
        res.status(400).json({
          message: 'Error: Get comment to delete',
          err
        })
      })
  }

}