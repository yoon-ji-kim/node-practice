var http = require('http'); //core module

var port = 9090;
var server = http.createServer(function(req, res){
    //요청들어오면 실행
    res.writeHead(200, {
        'Content-Type': "text/html"
    });
    res.end('<h1>Hello World</h1>');
});

//server 객체 실행
server.listen(port, function(){
    console.log('http server running on '+port);
})