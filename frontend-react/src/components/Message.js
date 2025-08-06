import React from 'react';
import ReactMarkdown from 'react-markdown';
import { User, Bot } from 'lucide-react';
import { MessageBubble, MessageHeader, LoadingDots } from '../styles/GlobalStyles';

const Message = ({ message, isLoading = false }) => {
  if (isLoading) {
    return (
      <MessageBubble isUser={false}>
        <MessageHeader>
          <Bot size={16} />
          Medical Assistant
        </MessageHeader>
        <LoadingDots>
          <span></span>
          <span></span>
          <span></span>
        </LoadingDots>
        <span style={{ marginLeft: '0.5rem', color: '#6b7280', fontSize: '0.8rem' }}>
          Analyzing your symptoms...
        </span>
      </MessageBubble>
    );
  }

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <MessageBubble isUser={message.role === 'user'}>
      <MessageHeader>
        {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
        {message.role === 'user' ? 'You' : 'Medical Assistant'}
        {message.timestamp && (
          <span style={{ marginLeft: 'auto', fontSize: '0.7rem' }}>
            {formatTime(message.timestamp)}
          </span>
        )}
      </MessageHeader>
      
      <div style={{ fontSize: '0.9rem' }}>
        {message.role === 'user' ? (
          <p>{message.content}</p>
        ) : (
          <ReactMarkdown
            components={{
              // Custom styling for markdown elements
              strong: ({ children }) => (
                <strong style={{ color: '#1f77b4' }}>{children}</strong>
              ),
              em: ({ children }) => (
                <em style={{ color: '#6b7280' }}>{children}</em>
              ),
              ul: ({ children }) => (
                <ul style={{ paddingLeft: '1rem', margin: '0.5rem 0' }}>{children}</ul>
              ),
              li: ({ children }) => (
                <li style={{ margin: '0.2rem 0' }}>{children}</li>
              ),
              p: ({ children }) => (
                <p style={{ margin: '0.5rem 0', lineHeight: '1.5' }}>{children}</p>
              ),
              h3: ({ children }) => (
                <h3 style={{ 
                  color: '#1f77b4', 
                  fontSize: '1rem', 
                  margin: '0.5rem 0',
                  fontWeight: '600'
                }}>{children}</h3>
              )
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </MessageBubble>
  );
};

export default Message;
