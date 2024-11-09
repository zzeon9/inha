var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { // / 뒤에 users 가 생략된 형태임
  res.send('respond with a resource'); // send : 데이터를 출력해줘라 
});

// 로그인
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName: 'users/login.ejs' }); // index의 의미 : views/index.ejs 를 가리킴 
});


// 회원가입
router.get('/join', function(req, res, next) {
  res.render('index', { title: '회원가입', pageName: 'users/join.ejs' }); // index의 의미 : views/index.ejs 를 가리킴 
});


// 장바구니
router.get('/cart', function(req, res, next) {
  res.render('index', { title: '장바구니', pageName: 'users/cart.ejs' }); // index의 의미 : views/index.ejs 를 가리킴 
});


// 마이 페이지
router.get('/mypage', function(req, res, next) {
  res.render('index', { title: '마이페이지', pageName: 'users/mypage.ejs' }); // index의 의미 : views/index.ejs 를 가리킴 
});



module.exports = router;
