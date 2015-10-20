// YOUR CODE HERE:
var app = {};
var messages;
$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'https://api.parse.com/1/classes/chatterbox?order=-createdAt',
  type: 'GET',
  contentType: 'application/json',
  success: function (data) {
    messages = data.results.reverse();
    console.log('chatterbox: Message: Data: ', data);
    printMessages();
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to get message. Error: ', data);
  }
});

function printMessages () { 
  for (var i = 0; i < 10; i++) {
    console.log(messages[i]);
  }
  console.log('Data: ' , messages);
  messages.forEach(function(message) {
    $('#main').append('<div class="chat">' + message.username + ': ' + (message.text || message.message) + '\n' + 
    message.updatedAt + '</div>');
  });
}

function messageFormatter () {

}