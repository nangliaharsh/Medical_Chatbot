import React, { useState } from 'react';
import { Send, Mic } from 'lucide-react';
import {
  InputContainer,
  InputForm,
  MessageInput,
  SendButton,
  SuggestionsContainer,
  SuggestionButton,
  QuickSymptomButton
} from '../styles/GlobalStyles';

const QUICK_SYMPTOMS = [
  "Sharp stomach pain",
  "Nausea and vomiting", 
  "Bloating and gas",
  "Burning sensation"
];

const ChatInput = ({ onSendMessage, suggestions = [], isLoading = false }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (!isLoading) {
      onSendMessage(suggestion);
    }
  };

  const handleQuickSymptomClick = (symptom) => {
    if (!isLoading) {
      onSendMessage(`I'm experiencing ${symptom.toLowerCase()}`);
    }
  };

  return (
    <InputContainer>
      {/* Suggestions from AI */}
      {suggestions.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ 
            fontSize: '0.9rem', 
            color: '#374151', 
            marginBottom: '0.5rem',
            fontWeight: '500'
          }}>
            💡 Suggested Questions
          </h4>
          <SuggestionsContainer>
            {suggestions.slice(0, 4).map((suggestion, index) => (
              <SuggestionButton
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                disabled={isLoading}
              >
                {suggestion}
              </SuggestionButton>
            ))}
          </SuggestionsContainer>
        </div>
      )}

      {/* Quick symptom buttons - show when no suggestions */}
      {suggestions.length === 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ 
            fontSize: '0.9rem', 
            color: '#374151', 
            marginBottom: '0.5rem',
            fontWeight: '500'
          }}>
            🔍 Quick Symptom Check
          </h4>
          <SuggestionsContainer>
            {QUICK_SYMPTOMS.map((symptom, index) => (
              <QuickSymptomButton
                key={index}
                onClick={() => handleQuickSymptomClick(symptom)}
                disabled={isLoading}
              >
                {symptom}
              </QuickSymptomButton>
            ))}
          </SuggestionsContainer>
        </div>
      )}

      {/* Main input form */}
      <InputForm onSubmit={handleSubmit}>
        <MessageInput
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your symptoms or ask a question..."
          disabled={isLoading}
          maxLength={500}
        />
        <SendButton 
          type="submit" 
          disabled={!message.trim() || isLoading}
          title="Send message"
        >
          <Send size={20} />
        </SendButton>
      </InputForm>

      {/* Voice input button (placeholder) */}
      <div style={{ textAlign: 'center' }}>
        <button
          style={{
            background: '#f3f4f6',
            border: '1px solid #d1d5db',
            borderRadius: '25px',
            padding: '0.5rem 1rem',
            color: '#9ca3af',
            cursor: 'not-allowed',
            fontSize: '0.8rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          disabled
          title="Voice input feature coming soon"
        >
          <Mic size={14} />
          Voice Input (Coming Soon)
        </button>
      </div>

      {/* Character count */}
      <div style={{ 
        textAlign: 'right', 
        fontSize: '0.7rem', 
        color: '#9ca3af',
        marginTop: '0.5rem'
      }}>
        {message.length}/500
      </div>
    </InputContainer>
  );
};

export default ChatInput;
