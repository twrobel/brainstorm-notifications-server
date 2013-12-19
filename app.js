var app = require('express')()
  , http = require('http')
  , port = 80;

var server = http.createServer(app)
console.log('listening on port ' + port);
server.listen(port);

var io = require('socket.io').listen(server);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.on('messages', function (data) {
	console.log('broadcasting ' + data);
    io.sockets.emit('messages_broadcast', data);
  });
});