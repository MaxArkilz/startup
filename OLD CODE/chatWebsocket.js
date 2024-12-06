const socket = new WebSocket(websocketUrl);

const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  displayMessage(message.username, message.text);
};

function displayMessage(username, text) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${username}:</strong> ${text}`;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    const messageObj = { text: message };
    socket.send(JSON.stringify(messageObj));
    displayMessage('You', message);
    messageInput.value = '';
  }
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});