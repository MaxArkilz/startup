const WebSocket = require('ws');

// Use environment variable or default to port 8080
const PORT = process.env.PORT || 8080;

const wss = new WebSocket.Server({ port: PORT });



wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
      console.log(`Received: ${message}`);
      // Broadcast the message to all clients
      wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
              client.send(message);
          }
      });
  });

  ws.on('close', () => {
      console.log('Client disconnected');
  });
});

console.log(`WebSocket server is running on ws://localhost:${PORT}`);
