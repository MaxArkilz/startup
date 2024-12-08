let ws; // Declare WebSocket variable outside the function

export function webTest() {
    const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
    ws = new WebSocket(`${protocol}://${location.hostname}:8080`);

    ws.onopen = () => {
        console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
        console.log(`Message from server: ${event.data}`);
    };

    ws.onclose = () => {
        console.log('WebSocket connection closed');
    };

    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
    };
}

export function checkConnectionStatus() {
    if (!ws) {
        alert('WebSocket is not initialized');
        return;
    }

    switch (ws.readyState) {
        case WebSocket.CONNECTING:
            alert('WebSocket is connecting...');
            break;
        case WebSocket.OPEN:
            alert('WebSocket is connected');
            break;
        case WebSocket.CLOSING:
            alert('WebSocket is closing...');
            break;
        case WebSocket.CLOSED:
            alert('WebSocket is not connected');
            break;
        default:
            alert('Unknown WebSocket state');
    }
}
