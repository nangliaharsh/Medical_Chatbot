import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds timeout
});

// Request interceptor for adding auth or logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    
    if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
      throw new Error('Unable to connect to the server. Please ensure the backend is running.');
    }
    
    if (error.response?.status === 500) {
      throw new Error('Server error occurred. Please try again later.');
    }
    
    throw error;
  }
);

export const chatAPI = {
  // Create a new chat session
  createSession: async () => {
    try {
      const response = await apiClient.post('/session');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to create session: ${error.message}`);
    }
  },

  // Send a chat message
  sendMessage: async (message, sessionId = null) => {
    try {
      const payload = {
        message,
        ...(sessionId && { session_id: sessionId })
      };
      
      const response = await apiClient.post('/chat', payload);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to send message: ${error.message}`);
    }
  },

  // Get chat history for a session
  getHistory: async (sessionId) => {
    try {
      const response = await apiClient.get(`/session/${sessionId}/history`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get chat history: ${error.message}`);
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      const response = await apiClient.get('/health');
      return response.data;
    } catch (error) {
      throw new Error(`Health check failed: ${error.message}`);
    }
  }
};

export default apiClient;
