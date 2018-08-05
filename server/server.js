require('./config/config.js');

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

// const publicPath = path.join(__dirname, '/../public');
// console.log(__dirname + '/../public');
// // /Users/robi/Library/Mobile Documents/com~apple~CloudDocs/Node/node-chat-app/server/../public
// console.log(publicPath);
// // /Users/robi/Library/Mobile Documents/com~apple~CloudDocs/Node/node-chat-app/public

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = { app };