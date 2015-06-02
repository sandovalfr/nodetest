var express = require('express');
var router = express.Router();

/* GET Code page */
router.get('/', function(req, res, next) {
  res.render('code', { title: 'FrankRSandoval' });
});

module.exports = router;
