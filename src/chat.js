function addChat() {
	//get the message from the user
	var message = document.getElementById('chat-message').value;
	//clear the text box
	document.getElementById('chat-message').value = "";
	//add the message to the messages under "You"
	
	var newHTML = '<div class="message you">' + message + '</div>'
	document.getElementById('chat-box').innerHTML += newHTML
	
	// now get Trump's response via Ajax.

	$.ajax({
		url: ,
		type: "get",
		data: {'message': message},
		success: function(data,status) {
			var thisHTML = '<div class="message trump">' + data + '</div>';
			document.getElementById('chat-box').innerHTML += thisHTML;
		}
		
	});
	
}
