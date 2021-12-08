var http = require("http");

http.createServer(function(req, res){
    if (req.url === "/about"){
        res.writeHead(800, {"content-type": "text/html"});
        res.write("Welcome to about us page");
        res.end();
    
    
    } else if(req.url === "/contact"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write("Welcome to contact us page");
        res.end();
    
    
    } else 
        res.writeHead(200, {"content-type": "text/html"});
        res.write("Hello world!");
        res.end();
    
    }
    )
    
    .listen(8000);