var express = require('express');
var router = express.Router();

/* GET home page. http://localhost:3000/ */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS412' });
});

router.post('/form', (req, res, next) => {//match http://localhost:3000/form (on a POST)
req.parsedName = parseName(req.body.name);

  res.send(req.body.name)

})
router.get('/form', (req, res, next) => { //match http://localhost:3000/form (on a GET)
res.send("Hey now!")

})

module.exports = router;

while (!result=fibs() % 2) {

}
let result = fibs();
if (result%2) yield result
else
  result = fibs()