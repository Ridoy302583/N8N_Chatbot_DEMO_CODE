import React from 'react';

const WelcomeMessage = ({ onExampleClick }) => {
  const examples = [
    "Who is Lelin?",
    "Tell me about Lelin",
    "What do you know about Lelin?",
    "Can you share information about Lelin?"
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <div className="mb-6 relative">
        <img 
          src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" 
          alt="AI Assistant" 
          className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg border-4 border-white"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/300x300/4f46e5/ffffff?text=AI+Assistant";
          }}
          crossOrigin="anonymous"
        />
        <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
          <i className="bi bi-lightning-fill text-white text-xs"></i>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to AI Chatbot</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        I'm your AI assistant, connected to a real API. Ask me questions and I'll provide information from the API.
      </p>
      
      <div className="bg-gray-50 p-4 rounded-lg shadow-inner w-full max-w-md">
        <h3 className="font-medium text-gray-700 mb-3">Try asking me something like:</h3>
        <div className="grid grid-cols-1 gap-2">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => onExampleClick(example)}
              className="text-left p-3 bg-white rounded-lg border border-gray-200 hover:bg-primary-50 hover:border-primary-200 transition-colors text-gray-700 flex items-center"
            >
              <i className="bi bi-chat-text mr-2 text-primary-500"></i>
              {example}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-8 flex items-center text-sm text-gray-500">
        <i className="bi bi-shield-check mr-1 text-primary-500"></i>
        Connected to live API endpoint
      </div>
    </div>
  );
};

export default WelcomeMessage;
