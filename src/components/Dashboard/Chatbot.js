// components/Dashboard/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help with your project today?", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      // Add user message
      const userMessage = { id: Date.now(), text: inputText, sender: 'user' };
      setMessages([...messages, userMessage]);
      
      // Simulate bot response
      setTimeout(() => {
        const botMessage = { 
          id: Date.now() + 1, 
          text: "I understand you're asking about: " + inputText + ". How can I assist you further?", 
          sender: 'bot' 
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
      
      setInputText('');
    }
  };

  return (
    <div className="chatbot">
      <div className="section-header">
        <h2>AI Assistant</h2>
      </div>
      
      <div className="chatbot-container card">
        <div className="chat-messages">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSendMessage} className="chat-input-form">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask something about your project..."
          />
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;