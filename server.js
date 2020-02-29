const PORT = process.env.PORT || 3000;

var static = require('node-static');
var http = require('http');
var file = new(static.Server)();
var app = http.createServer(function (req, res) {
	file.serve(req, res);
}).listen(PORT);

console.log('begin');
console.log('Listening on ' + PORT);

var io = require('socket.io').listen(app);
console.log('io is added');

io.sockets.on('connection', function (socket){
	console.log('user connected');
	socket.emit('success');

});




