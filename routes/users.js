var express = require('express');
var router = express.Router();
const qs = require('querystringify');
//var indexRouter = require('./routes/index');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
