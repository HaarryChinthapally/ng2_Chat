var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 8000;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket) => {
  console.log('new connection made');

  // Broadcast messages
  // socket.on('send-message', (data) => {
  //   io.emit('message-received', data);
  // });

   socket.emit('event1', {
      msg: 'Is socket.io working for you ?'
    });

   socket.on('event2', (data) => {
      console.log(data.msg);
    });

   socket.on('event3', (data) => {
      console.log(data.msg);
    });

  // socket.emit('message-from-server', {
  //   greeting: 'Hello from Server'
  // });

  // socket.on('message-from-client', function(msg) {
  //   console.log(msg);
  // });

});

server.listen(port, () => {
  console.log("Listening on port " + port);
});