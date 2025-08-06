import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { chatAPI } from '../services/api';
import {
  ChatContainer as StyledChatContainer,
  MessagesContainer,
  ErrorMessage,
  StatusIndicator
} from '../styles/GlobalStyles';
import Message from './Message';
import ChatInput from './ChatInput';

const ChatContainer = ({ sessionId, onSessionIdChange }) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('connecting');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Initialize session and check backend health
  useEffect(() => {
    const initializeChat = async () => {
      try {
        setConnectionStatus('connecting');
        
        // Health check
        await chatAPI.healthCheck();
        setConnectionStatus('online');
        
        // Create session if none exists
        if (!sessionId) {
          const sessionData = await chatAPI.createSession();
          onSessionIdChange(sessionData.session_id);
        }

        setError(null);
      } catch (err) {
        console.error('Failed to initialize chat:', err);
        setConnectionStatus('offline');
        setError('Unable to connect to the medical assistant. Please check your connection and try again.');
      }
    };

    initializeChat();
  }, [sessionId, onSessionIdChange]);

  // Send a message to the API
  const handleSendMessage = async (messageText) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = {
      id: uuidv4(),
      role: 'user',
      content: messageText,
      timestamp: new Date().toISOString()
    };

    // Add user message immediately
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);
    setSuggestions([]); // Clear previous suggestions

    try {
      const response = await chatAPI.sendMessage(messageText, sessionId);
      
      const botMessage = {
        id: uuidv4(),
        role: 'assistant',
        content: response.response,
        timestamp: response.timestamp || new Date().toISOString()
      };

      setMessages(prev => [...prev, botMessage]);
      setSuggestions(response.suggestions || []);
      
      // Update session ID if it changed
      if (response.session_id && response.session_id !== sessionId) {
        onSessionIdChange(response.session_id);
      }

      setConnectionStatus('online');
    } catch (err) {
      console.error('Failed to send message:', err);
      setConnectionStatus('offline');
      
      const errorMessage = {
        id: uuidv4(),
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble connecting right now. Please check your internet connection and try again. If the problem persists, the medical assistant service might be temporarily unavailable.',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Clear conversation and start new session
  const handleNewConversation = async () => {
    try {
      setIsLoading(true);
      setMessages([]);
      setSuggestions([]);
      setError(null);
      
      const sessionData = await chatAPI.createSession();
      onSessionIdChange(sessionData.session_id);
      
      setConnectionStatus('online');
    } catch (err) {
      console.error('Failed to create new session:', err);
      setConnectionStatus('offline');
      setError('Unable to start a new conversation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Get connection status display
  const getStatusDisplay = () => {
    switch (connectionStatus) {
      case 'online':
        return { text: 'Connected', className: 'online' };
      case 'offline':
        return { text: 'Offline', className: 'offline' };
      case 'connecting':
        return { text: 'Connecting...', className: 'connecting' };
      default:
        return { text: 'Unknown', className: 'offline' };
    }
  };

  const statusDisplay = getStatusDisplay();

  return (
    <StyledChatContainer>
      {/* Connection Status Indicator */}
      <StatusIndicator>
        <div className={`status-dot ${statusDisplay.className}`}></div>
        {statusDisplay.text}
      </StatusIndicator>

      {/* Messages Area */}
      <MessagesContainer>
        {messages.length === 0 && !error && (
          <div style={{
            textAlign: 'center',
            color: '#9ca3af',
            fontSize: '0.9rem',
            padding: '2rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h3 style={{ color: '#374151', marginBottom: '1rem' }}>
              🏥 Welcome to your Medical Assistant
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              I'm here to help you understand abdominal pain and related symptoms.
            </p>
            <p style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>
              Please describe your symptoms or use the quick symptom buttons below to get started.
            </p>
          </div>
        )}

        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        
        {isLoading && <Message isLoading={true} />}
        
        {error && (
          <ErrorMessage>
            <strong>Connection Error:</strong> {error}
            <button
              onClick={handleNewConversation}
              style={{
                marginLeft: '1rem',
                background: '#dc2626',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '0.25rem 0.5rem',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              Retry
            </button>
          </ErrorMessage>
        )}
        
        <div ref={messagesEndRef} />
      </MessagesContainer>

      {/* Input Area */}
      <ChatInput
        onSendMessage={handleSendMessage}
        suggestions={suggestions}
        isLoading={isLoading}
      />
    </StyledChatContainer>
  );
};

export default ChatContainer;
