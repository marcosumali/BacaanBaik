const express = require('express');
const { getUsers, signup, signin } = require('../controllers/c_users');

const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router
  .get('/', getUsers)
  .post('/signup', signup)
  .post('/signin', signin)


module.exports = router;
