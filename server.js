var static = require('node-static');
var http = require('http');
var file = new(static.Server)();
var app = http.createServer(function (req, res) {
	file.serve(req, res);
}).listen(2017);

var io = require('socket.io').listen(app);
console.log('begin');
console.log('listening on port: 2017');


io.sockets.on('connection', function (socket){
	console.log('user connected');
	socket.emit('success');

});

