var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , port = process.env.PORT || 5000;

console.log('listening on port ' + port);

server.listen(port);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.on('messages', function (data) {
    socket.emit('messages_broadcast', data);
  });
});