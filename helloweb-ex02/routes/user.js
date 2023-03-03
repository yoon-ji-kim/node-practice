var express = require('express');

var router = express.Router();
// /user?no=10 no 값 빼오기
router.route('').get(function(req, res) {
    res.render('user/info', {
        no: req.query.no || 0
    });
});

// join form
router.route('/join').get(function(req, res) {
    res.render('user/join');
});

// join submit
router.route('/join').post(function(req, res) {
    console.log(req.body);
    //redirect
    res.redirect('/');
});

// json 응답
router.route('/api').get(function(req, res) {
    var vo = {
        no: 10,
        name: '둘리',
        email: 'dooly@gmail.com'
    }

    res.send(vo);
});

// path variable /user/10 값 가져오기
router.route('/:no').get(function(req, res) {
    res.render('user/info', {
        no: req.params.no || 0
    });
});

module.exports = router;