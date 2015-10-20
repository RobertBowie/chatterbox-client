// YOUR CODE HERE:
var app = {};
app.messages;
app.server = 'https://api.parse.com/1/classes/chatterbox';
app.init = function() {
  app.fetch();
};
//Fetch can be for new data

app.send = function(message) {
  $.ajax({
    url: app.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent. Data: ', data);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message. Error: ', data);
    }
  });
};

app.fetch = function() {
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: app.server + '?order=-createdAt',
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      app.messages = data.results.reverse();
      console.log('chatterbox: Message: Data: ', data);
      app.addMessage();
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to get message. Error: ', data);
    }
  });
};

app.addMessage = function() { 
  app.messages.forEach(function(message) {
    if (message.text && message.text.charAt(0) !== '<') {
    console.log('Data: ' , message);
    var messageText = message.username + ' ' + message.text;
    $('#main').append('<div class="chat">' + messageText + '</div>');
    }
  });
};

app.init();
// function messageFormatter (message) {
   //  message.username.toString() + ': "'
   // + (if(message.text){message.text.toString()} || message.message.toString())
   // + '"'
   // + message.updatedAt
// }