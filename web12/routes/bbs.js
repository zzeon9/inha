var express = require('express');
var router = express.Router();

/* 게시판 목록 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '게시판', pageName:'bbs/list.ejs' });
});


/* 게시글 등록 */
router.get('/insert', function(req, res, next) {
    res.render('index', { title: '글쓰기', pageName:'bbs/insert.ejs' });
  });

/* 게시글 정보 */
router.get('/:id', function(req, res, next) { // :id 는 변수 취급
  const id = req.params.id; // :id 값을 가져옴
  res.render('index', { title: '게시글 정보', pageName:'bbs/read.ejs', id });
});

/* 게시글 수정 */
router.get('/update/:id', function(req, res, next) { // :id 는 변수 취급
  const id = req.params.id; // :id 값을 가져옴
  res.render('index', { title: '게시글 수정', pageName:'bbs/update.ejs', id });
});

module.exports = router;