var express = require('express');

//router 객체 생성
var router = express.Router();

router.route('').get(function(req, res) {
    res.render('main/index')
});






//router export
module.exports = router;