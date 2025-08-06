import React from 'react';
import styled from 'styled-components';
import { RefreshCw, Info, AlertTriangle, Heart } from 'lucide-react';

const SidebarContainer = styled.aside`
  width: 300px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    overflow-x: auto;
    overflow-y: hidden;
    flex-direction: row;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
  }
`;

const SidebarSection = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  
  @media (max-width: 768px) {
    padding: 0;
    border-bottom: none;
    white-space: nowrap;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0;
  }
`;

const SectionContent = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.5;
  
  ul {
    list-style: none;
    margin: 0.5rem 0;
  }
  
  li {
    margin: 0.3rem 0;
    padding-left: 1rem;
    position: relative;
    
    &:before {
      content: "•";
      color: #1f77b4;
      position: absolute;
      left: 0;
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NewConversationButton = styled.button`
  background: linear-gradient(135deg, #1f77b4 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(31, 119, 180, 0.3);
  }
  
  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    white-space: nowrap;
  }
`;

const WarningBox = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  
  .warning-title {
    font-weight: 600;
    color: #dc2626;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .warning-content {
    color: #7f1d1d;
    font-size: 0.85rem;
    line-height: 1.4;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileOnlySection = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Sidebar = ({ onNewConversation, isLoading }) => {
  return (
    <SidebarContainer>
      <SidebarSection>
        <NewConversationButton 
          onClick={onNewConversation}
          disabled={isLoading}
        >
          <RefreshCw size={16} />
          New Conversation
        </NewConversationButton>
      </SidebarSection>
      
      <MobileOnlySection>
        <Info size={16} color="#1f77b4" />
        <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>
          Medical AI Assistant
        </span>
      </MobileOnlySection>

      <SidebarSection>
        <SectionTitle>
          <Info size={16} />
          About This Assistant
        </SectionTitle>
        <SectionContent>
          <p>This AI assistant specializes in <strong>abdominal pain</strong> and can help you:</p>
          <ul>
            <li>Understand possible causes of abdominal pain</li>
            <li>Identify symptoms and their severity</li>
            <li>Learn when to seek medical attention</li>
            <li>Get educational information about conditions</li>
          </ul>
        </SectionContent>
      </SidebarSection>

      <SidebarSection>
        <SectionTitle>
          <Heart size={16} />
          How to Use
        </SectionTitle>
        <SectionContent>
          <ul>
            <li>Describe your symptoms clearly</li>
            <li>Answer follow-up questions</li>
            <li>Use quick symptom buttons</li>
            <li>Ask about specific conditions</li>
          </ul>
        </SectionContent>
      </SidebarSection>

      <SidebarSection>
        <WarningBox>
          <div className="warning-title">
            <AlertTriangle size={16} />
            Emergency Warning Signs
          </div>
          <div className="warning-content">
            <strong>Seek immediate medical attention if you experience:</strong>
            <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              <li>Severe, persistent abdominal pain</li>
              <li>High fever or difficulty breathing</li>
              <li>Blood in vomit or stool</li>
              <li>Signs of dehydration</li>
            </ul>
          </div>
        </WarningBox>
      </SidebarSection>

      <SidebarSection style={{ marginTop: 'auto', borderBottom: 'none' }}>
        <SectionContent>
          <p style={{ 
            fontSize: '0.75rem', 
            color: '#9ca3af', 
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            This information is for educational purposes only and should not replace professional medical advice.
          </p>
        </SectionContent>
      </SidebarSection>
    </SidebarContainer>
  );
};

export default Sidebar;
