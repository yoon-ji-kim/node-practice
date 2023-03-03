var http = require('http');
var path = require('path');
var express = require('express');

var mainRouter = require('./routes/main'); //파일 모듈
var userRouter = require('./routes/user');

var port = 9090;

// setup application
//var application = express();
// build
// 1. static resource 
//application.use(express.static(path.join(__dirname , "assets")));
// 2. body parser
//application.use(express.urlencoded({extended: true})) //application/x-www-form-urlencoded
// 요청 body 해석
//application.use(express.json())
// 3. view engine
//application.set('views', path.join(__dirname, 'views'))
//application.set('view engine', 'ejs')
// 4. request router
//application.use("/", mainRouter)
//application.use("/user", userRouter)
var application = express()
    .use(express.static(path.join(__dirname , "assets")))
    .use(express.urlencoded({extended: true}))
    .use(express.json())
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use("/", mainRouter)
    .use("/user", userRouter)
// server start
http.createServer(application)
    .on('listening', function() {
        console.log('http server running on...'+port);
    })
    .on('error', function(error){
        console.error(error);
    })
    .listen(port);