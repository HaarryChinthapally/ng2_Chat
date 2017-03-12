var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 8000;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket) => {
  console.log('new connection made');

});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

server.listen(port, () => {
  console.log("Listening on port " + port);
});