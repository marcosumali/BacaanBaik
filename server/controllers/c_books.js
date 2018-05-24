const ModelBook = require('../models/m_books');

module.exports = {

  save: (req, res, next) => {

    let { title, author, publisher } = req.body;
    let { _id } = req.decoded;
        
    let newObj = {
      userId: _id,
      title,
      author,
      publisher,
      image: req.file.cloudStoragePublicUrl
    }

    let newBook = new ModelBook(newObj);

    newBook.save()
      .then(result => {
        res.status(201).json({
          message: 'Save new book successful',
          book: result,
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'Error: Bad request save new book',
          err
        })
      })
  },

  getBooks: (req, res, next) => {

    ModelBook.find()
      .populate('userId')
      .exec()
      .then(result => {
        res.status(200).json({
          message: 'Get books successful',
          result
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'Error: Get books',
          err
        })
      })

  },

  getBook: (req, res, next) => {

    let bookId = req.query.id;

    ModelBook.find({ _id: bookId })
      .populate('userId')
      .exec()
      .then(result => {
        res.status(200).json({
          message: 'Get book successful',
          result
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'Error: Get book',
          err
        })
      })

  },

  deleteBook: (req, res, next) => {

    let bookId = req.query.id;
    let { _id } = req.decoded;

    ModelBook.findById(bookId)
      .populate('userId')
      .exec()
      .then(result => {

        if (result.userId._id == _id) {

          ModelBook.findOneAndRemove({ _id: bookId })
            .then(result => {
              res.status(200).json({
                message: 'Delete book successful',
                deleted_book: result
              })
            })
            .catch(err => {
              res.status(400).json({
                message: 'Error: delete book',
                err
              })
            })

        } else {

          res.status(400).json({
            message: 'Error: You are not authorised to delete the book',
          })
        }

      })
      .catch(err => {
        res.status(400).json({
          message: 'Error: Get book to delete',
          err
        })
      })

  }

}