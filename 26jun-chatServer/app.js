const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
let messages = [];

io.on('connection', (socket) => {

  console.log('USER CONNECTED');

  socket.on('disconnect', function(){
    console.log('USER DISCONNECTED');
  });

  socket.on('add-a-message', (message) => {
    console.log(`Received ${message}`);
    messages.push(message);
    io.emit('a-new-message', {type:'new-message', text: message, id: message.id});
  });
  socket.on('delete-message', (message) => {
    console.log(`Deleted ${message}`);
    let deleted_messages = messages.splice(messages.indexOf(message),1);
    io.emit('deleted-message', {type: 'delete-message', id: message.id})
  });

});

http.listen(8080,
    () => console.log(`Server listening on 8080`)
);
module.exports = app;
