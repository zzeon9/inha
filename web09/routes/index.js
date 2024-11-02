var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '홈페이지', pageName: 'home.ejs' }); // index의 의미 : views/index.ejs 를 가리킴 
});

module.exports = router;
