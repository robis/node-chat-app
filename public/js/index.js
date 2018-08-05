var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconested from server.');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//   from: 'Frank',
//   text: 'hi'
// }, function(data) {
//   // calback funkcija, ki se pokliče, ko dobiš potrdilo o prejemu
//   console.log('Got it', data);
// });

jQuery('#message-form').on('submit', function (e){
  // s tem izključim normalno obnašanje submita, ki naredi reload strani
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  })
});