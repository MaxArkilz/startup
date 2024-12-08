import React, { useState, useEffect, useRef } from "react";

export function Chat({ username }) {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const socketRef = useRef(null);
    const chatMessagesRef = useRef(null);

    useEffect(() => {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        socketRef.current = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);


            socketRef.current.onopen = () => console.log('WebSocket connected');
            socketRef.current.onmessage = (event) => {
                const message = JSON.parse(event.data);
                setMessages((prevMessages) => [...prevMessages, message]);
            };
            socketRef.current.onerror = (error) => console.error('WebSocket error:', error);
            socketRef.current.onclose = () => console.log('WebSocket closed');

        // Cleanup function
        return () => {
            if (socketRef.current) {
                socketRef.current.close();
                console.log('WebSocket connection closed');
            }
        };
    }, []);

    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = () => {
        if (socketRef.current) {
            switch (socketRef.current.readyState) {
                case WebSocket.OPEN:
                    const messageObj = { text: inputMessage, username };
                    socketRef.current.send(JSON.stringify(messageObj));
                    setMessages((prevMessages) => [...prevMessages, messageObj]);
                    setInputMessage('');
                    break;
                case WebSocket.CONNECTING:
                    alert('WebSocket is still connecting. Please wait.');
                    break;
                case WebSocket.CLOSING:
                case WebSocket.CLOSED:
                    alert('WebSocket is not connected. Please refresh or try again later.');
                    break;
                default:
                    console.error('Unexpected WebSocket state:', socketRef.current.readyState);
            }
        } else {
            console.error('WebSocket is not initialized.');
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-messages" ref={chatMessagesRef}>
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.username === username ? 'own-message' : ''}`}>
                        <strong>{msg.username}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}
