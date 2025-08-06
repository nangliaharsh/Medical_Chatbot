import React, { useState, useEffect } from 'react';
import { Cross } from 'lucide-react';
import { GlobalStyle, AppContainer, MainContent, Header } from './styles/GlobalStyles';
import Sidebar from './components/Sidebar';
import ChatContainer from './components/ChatContainer';

function App() {
  const [sessionId, setSessionId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load session ID from localStorage on mount
  useEffect(() => {
    const savedSessionId = localStorage.getItem('medical-chatbot-session-id');
    if (savedSessionId) {
      setSessionId(savedSessionId);
    }
  }, []);

  // Save session ID to localStorage whenever it changes
  useEffect(() => {
    if (sessionId) {
      localStorage.setItem('medical-chatbot-session-id', sessionId);
    }
  }, [sessionId]);

  const handleNewConversation = () => {
    setIsLoading(true);
    // Clear the stored session ID
    localStorage.removeItem('medical-chatbot-session-id');
    setSessionId(null);
    
    // The ChatContainer will handle creating a new session
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleSessionIdChange = (newSessionId) => {
    setSessionId(newSessionId);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Sidebar 
          onNewConversation={handleNewConversation}
          isLoading={isLoading}
        />
        
        <MainContent>
          <Header>
            <h1>
              <Cross size={24} />
              Medical Chatbot - Abdominal Pain Assistant
            </h1>
          </Header>
          
          <ChatContainer
            sessionId={sessionId}
            onSessionIdChange={handleSessionIdChange}
          />
        </MainContent>
      </AppContainer>
    </>
  );
}

export default App;
