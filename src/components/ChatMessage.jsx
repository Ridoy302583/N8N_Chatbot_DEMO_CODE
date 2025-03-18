import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ChatMessage = ({ message }) => {
  const { text, sender, isError, timestamp } = message;
  const isUser = sender === 'user';
  
  const formattedTime = new Date(timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className={`flex items-start space-x-2 message-appear ${isUser ? 'justify-end' : ''}`}>
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
          <i className="bi bi-robot text-primary-600"></i>
        </div>
      )}
      
      <div className={`rounded-lg p-3 max-w-[80%] ${
        isUser 
          ? 'bg-primary-600 text-white' 
          : isError 
            ? 'bg-red-100 text-red-800 border border-red-200' 
            : 'bg-gray-100 text-gray-800'
      }`}>
        {isUser ? (
          <p className="whitespace-pre-wrap">{text}</p>
        ) : (
          <div className="markdown-content prose prose-sm max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              className={`${isUser ? 'text-white' : ''}`}
              components={{
                // Style markdown elements
                h1: ({node, ...props}) => <h1 className="text-xl font-bold my-2" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-lg font-bold my-2" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-md font-bold my-1" {...props} />,
                p: ({node, ...props}) => <p className="my-1" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-5 my-1" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-5 my-1" {...props} />,
                li: ({node, ...props}) => <li className="my-0.5" {...props} />,
                a: ({node, ...props}) => <a className="text-primary-600 hover:underline" {...props} />,
                code: ({node, inline, ...props}) => 
                  inline 
                    ? <code className="bg-gray-200 px-1 rounded text-sm" {...props} />
                    : <code className="block bg-gray-800 text-white p-2 rounded text-sm my-2 overflow-x-auto" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-3 italic my-2" {...props} />,
                img: ({node, ...props}) => <img className="max-w-full rounded my-2" {...props} />
              }}
            >
              {text}
            </ReactMarkdown>
          </div>
        )}
        <div className={`text-xs mt-1 ${isUser ? 'text-primary-200' : 'text-gray-500'}`}>
          {formattedTime}
        </div>
      </div>
      
      {isUser && (
        <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
          <i className="bi bi-person-fill text-white"></i>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
