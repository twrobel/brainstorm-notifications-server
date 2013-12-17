var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , port = process.env.PORT || 5000;

setInterval(function () {
    console.log('timer event every 6 seconds');
}, 6000);


server.listen(port);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.on('messages', function (data) {
    socket.emit('messages_broadcast', data);
  });
});