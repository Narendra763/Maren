var http = require('http');
http.createServer(function (req,res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('i am narendra');
	
	res.end();
}).listen(5000);