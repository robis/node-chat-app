require('./config/config.js');

const express = require('express');
const path = require('path');

// const publicPath = path.join(__dirname, '/../public');
// console.log(__dirname + '/../public');
// // /Users/robi/Library/Mobile Documents/com~apple~CloudDocs/Node/node-chat-app/server/../public
// console.log(publicPath);
// // /Users/robi/Library/Mobile Documents/com~apple~CloudDocs/Node/node-chat-app/public

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = { app };