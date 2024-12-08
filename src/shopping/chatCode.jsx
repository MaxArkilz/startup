import React, { useState, useEffect } from 'react';

const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
const ws = new WebSocket(`${protocol}://${location.hostname}:8080`);

export function Chat() {
    const [messages, setMessages] = useState([]); // Store chat messages
    const [input, setInput] = useState(''); // Store input text

    // Set up WebSocket listeners
    useEffect(() => {
        ws.onopen = () => console.log('Connected to WebSocket server');

        ws.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        ws.onclose = () => console.log('WebSocket connection closed');
        ws.onerror = (error) => console.error('WebSocket error:', error);

        return () => {
            ws.close(); // Clean up WebSocket connection on component unmount
        };
    }, []);

    // Handle sending a message
    const sendMessage = () => {
        if (input.trim()) {
            ws.send(input); // Send the message to the server
            setInput(''); // Clear the input field
        }
    };

    return (
        <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
            <h2>Chat</h2>
            <div
                style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '1rem',
                    height: '200px',
                    overflowY: 'scroll',
                    marginBottom: '1rem',
                }}
            >
                {messages.map((message, index) => (
                    <div key={index} style={{ marginBottom: '0.5rem' }}>
                        {message}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
                style={{
                    padding: '0.5rem',
                    width: 'calc(100% - 80px)',
                    marginRight: '1rem',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                }}
            />
            <button
                onClick={sendMessage}
                style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    cursor: 'pointer',
                }}
            >
                Send
            </button>
        </div>
    );
}
