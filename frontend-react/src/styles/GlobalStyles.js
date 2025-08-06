import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8fafc;
    color: #1a202c;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  
  @media (max-width: 768px) {
    height: calc(100vh - 60px);
  }
`;

export const Header = styled.header`
  background: linear-gradient(135deg, #1f77b4 0%, #2563eb 100%);
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    
    h1 {
      font-size: 1.2rem;
    }
  }
`;

export const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  
  @media (max-width: 768px) {
    height: calc(100vh - 140px);
  }
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #f8fafc;
`;

export const MessageBubble = styled.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 18px;
  word-wrap: break-word;
  line-height: 1.4;
  
  ${props => props.isUser ? `
    background: linear-gradient(135deg, #1f77b4 0%, #2563eb 100%);
    color: white;
    margin-left: auto;
    border-bottom-right-radius: 4px;
  ` : `
    background: white;
    color: #374151;
    margin-right: auto;
    border: 1px solid #e5e7eb;
    border-bottom-left-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  `}
  
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 0.6rem 0.8rem;
  }
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.8;
`;

export const InputContainer = styled.div`
  padding: 1rem;
  background: white;
  border-top: 1px solid #e5e7eb;
`;

export const InputForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const MessageInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 25px;
  outline: none;
  font-size: 0.9rem;
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: #1f77b4;
  }
  
  &:disabled {
    background-color: #f9fafb;
    cursor: not-allowed;
  }
`;

export const SendButton = styled.button`
  background: linear-gradient(135deg, #1f77b4 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(31, 119, 180, 0.3);
  }
  
  &:disabled {
    background: #d1d5db;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SuggestionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const SuggestionButton = styled.button`
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 20px;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e5e7eb;
    border-color: #9ca3af;
  }
`;

export const QuickSymptomButton = styled.button`
  background: #fef3c7;
  border: 1px solid #fbbf24;
  border-radius: 15px;
  padding: 0.5rem 0.8rem;
  font-size: 0.8rem;
  color: #92400e;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #fde68a;
    transform: translateY(-1px);
  }
`;

export const LoadingDots = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #6b7280;
    animation: loading 1.4s ease-in-out infinite both;
    
    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
    &:nth-child(3) { animation-delay: 0; }
  }
  
  @keyframes loading {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

export const ErrorMessage = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin: 1rem;
  font-size: 0.9rem;
`;

export const StatusIndicator = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid #e5e7eb;
  
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    
    &.online {
      background: #10b981;
    }
    
    &.offline {
      background: #ef4444;
    }
    
    &.connecting {
      background: #f59e0b;
      animation: pulse 2s infinite;
    }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;
