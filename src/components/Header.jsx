import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="bi bi-robot text-3xl text-primary-600"></i>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
            AI Chatbot
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                <i className="bi bi-house-door mr-1"></i> Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                <i className="bi bi-info-circle mr-1"></i> About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                <i className="bi bi-question-circle mr-1"></i> Help
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
