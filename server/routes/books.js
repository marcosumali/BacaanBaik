const express = require('express');
const { save, getBooks, getBook, deleteBook } = require('../controllers/c_books');
const { authentication, authorisation, autherror } = require('../middlewares/auth');
const images = require('../middlewares/gcp');

const router = express.Router();

router
  .get('/', getBooks)
  .get('/single', getBook)
  .post('/save', authentication, authorisation, autherror, images.multer.single('image'), images.sendUploadToGCS, save)
  .delete('/delete', authentication, authorisation, autherror, deleteBook)

module.exports = router;
