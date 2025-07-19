"use client";

import { useState } from 'react';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);

    // Simple keyword matching for responses
    const lowerInput = input.toLowerCase();
    let botResponse = "Sorry, I don't have information about that.";

    if (lowerInput.includes('project')) {
      botResponse = "I have worked on projects like Sentiment Analyzer, Image Classifier, and Recommendation Engine.";
    } else if (lowerInput.includes('experience')) {
    botResponse = "I have experience as a Senior AI Engineer at Innovate AI and Machine Learning Engineer at DataDriven Inc.";
    } else if (lowerInput.includes('contact')) {
    botResponse = "You can find my contact information on the contact section of this website.";
    }

    setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-card text-card-foreground rounded-md shadow-lg overflow-hidden border">
      <div className="p-4 bg-primary text-primary-foreground">Chatbot</div>
      <div className="h-60 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex">
        <input
          type="text"
          className="flex-grow border rounded-l-md p-2 text-sm bg-background"
          placeholder="Ask me a question..."
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-primary text-primary-foreground rounded-r-md px-4 py-2 text-sm"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;