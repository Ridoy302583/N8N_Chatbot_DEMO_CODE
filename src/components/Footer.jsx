import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <i className="bi bi-robot text-2xl text-primary-400"></i>
              <span className="text-xl font-semibold">AI Chatbot</span>
            </div>
            <p className="text-gray-400 mt-2">Intelligent conversations powered by AI</p>
          </div>
          
          <div className="flex space-x-8">
            <div>
              <h3 className="font-semibold mb-2">Links</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <i className="bi bi-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <i className="bi bi-github text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <i className="bi bi-linkedin text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} AI Chatbot. All rights reserved.</p>
          <p className="mt-1 text-sm">Designed by WebSparks AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
