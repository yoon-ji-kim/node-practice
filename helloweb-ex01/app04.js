var connect = require('connect');
var serveStatic = require('serve-static');
var connectRoute = require('connect-route');

var port = 9090;
var app = connect();

app.use(connectRoute(function(route){
    //get 방식의 /
    route.get("/", function(req, res){
        res.writeHead(200, {
            'Content-Type': 'text.html'
        });
        res.end('<h1>Main</h1')
    });
    //get 방식으로 /user
    route.get("/user", function(req, res){
        res.writeHead(200, {
            'Content-Type': 'text.html'
        });
        res.end('<h1>User</h1')
    });
}));
app.use(serveStatic(__dirname + "/public"));
app.listen(port, function(){
    console.log('http server running on '+port);
});