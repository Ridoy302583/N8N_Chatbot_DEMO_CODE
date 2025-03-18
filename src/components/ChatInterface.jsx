import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { fetchChatResponse, getMockResponse } from '../services/apiService';
import WelcomeMessage from './WelcomeMessage';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsLoading(true);
    
    try {
      // Call the real API
      const responseText = await fetchChatResponse(text);
      
      // Add bot response
      const botMessage = {
        id: Date.now() + 1,
        text: responseText, // This should now be a string
        sender: 'bot',
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      
      // Try to use mock response as fallback
      const fallbackResponse = getMockResponse(text);
      
      // Add error or fallback message
      const errorMessage = {
        id: Date.now() + 1,
        text: fallbackResponse,
        sender: 'bot',
        isError: true,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] md:h-[700px]">
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-4 text-white">
        <h2 className="text-xl font-semibold flex items-center">
          <i className="bi bi-chat-dots-fill mr-2"></i>
          Chat with AI Assistant
        </h2>
      </div>
      
      <div 
        ref={chatContainerRef}
        className="flex-grow p-4 overflow-y-auto chat-container"
      >
        {messages.length === 0 ? (
          <WelcomeMessage onExampleClick={handleSendMessage} />
        ) : (
          <div className="space-y-4">
            {messages.map(message => (
              <ChatMessage key={message.id} message={message} />
            ))}
            
            {isLoading && (
              <div className="flex items-start space-x-2 message-appear">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-robot text-primary-600"></i>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <div className="typing-indicator flex space-x-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatInterface;
