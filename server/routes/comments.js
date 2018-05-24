const express = require('express');
const { save, getComments, getCommentsByBook, deleteComment } = require('../controllers/c_comments');
const { authentication, authorisation, autherror } = require('../middlewares/auth');

const router = express.Router();

router
  .get('/', getComments)
  .get('/byBook', getCommentsByBook)
  .post('/save', authentication, authorisation, autherror, save)
  .delete('/delete', authentication, authorisation, autherror, deleteComment)
  
module.exports = router;
