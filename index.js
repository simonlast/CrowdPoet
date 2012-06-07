var bee = require("beeline");
var http = require("http");
var fs = require("fs");
var nowjs = require("now");


var cache = {};
cache['index'] = fs.readFileSync('./index.html');
cache['style'] = fs.readFileSync('./style.css')

var router = bee.route({ // Create a new router
	"/": function(req, res) {
		console.log("served home");
       	res.writeHead(200, {"Content-Type": "text/html"});
	    res.write(cache['index']);
	    res.end();
    },
	"/style.css": function(req, res) {
		console.log("served style");
       	res.writeHead(200, {"Content-Type": "text/html"});
	    res.write(cache['style']);
	    res.end();
    },
	
    "`404`": function(req, res) {
        
    },
    "`503`": function(req, res, err) {
        
    }
});

httpServer = http.createServer(router).listen(8888);