$(document).ready(function(){
var box = PUBNUB.$('box');
var input = PUBNUB.$('input');
var channel = 'punahou';
PUBNUB.subscribe({
  channel: channel,
  callback: function(text) {
	box.innerHTML = ('' + text).replace(/[<>]/g, '') + '<br>' + box.innerHTML;
  }
});
PUBNUB.bind('keyup', input, function(e) {
(e.keyCode || e.charCode) === 13 && PUBNUB.publish({
  channel: channel,
  message: input.value,
  x: (input.value = '')
})
})
})

// PUBNUB.publish({ channel : 'chat', message : "hello!" })