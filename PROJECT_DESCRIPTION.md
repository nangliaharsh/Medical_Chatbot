# 🏥 Medical Chatbot - Abdominal Pain Assistant

## Overview

The Medical Chatbot - Abdominal Pain Assistant is an AI-powered healthcare application that specializes in providing medical information and guidance for abdominal pain-related conditions. This intelligent system combines modern machine learning techniques with medical knowledge to offer users preliminary insights about their symptoms while emphasizing the importance of professional medical consultation.

## 🎯 Project Purpose

This chatbot serves as a medical information assistant that:
- Provides preliminary analysis of abdominal pain symptoms
- Offers educational information about various conditions
- Generates contextual follow-up questions to better understand symptoms
- Identifies potential emergency situations requiring immediate medical attention
- Maintains conversation context for more natural interactions

**⚠️ Important Disclaimer**: This application is for educational and informational purposes only and should not replace professional medical advice, diagnosis, or treatment.

## 🏗️ Architecture & Design

### System Architecture
The application follows a modular, microservices-inspired architecture:

```
Frontend (React.js) → FastAPI Backend → ML Models → Medical Knowledge Base
```

### Core Components

#### 1. **Frontend Layer** (`frontend-react/`)
- **Technology**: React.js + Styled Components
- **Main Files**: React components and services
- **Features**:
  - Modern, responsive single-page application
  - Component-based architecture for maintainability
  - Real-time chat interface with message bubbles
  - Session persistence using localStorage
  - Dynamic AI-generated suggestions
  - Quick symptom selection buttons
  - Emergency warning displays in sidebar
  - Connection status indicators
  - Markdown support for formatted responses
  - Mobile-first responsive design

#### 2. **Backend API Layer** (`app/`)
- **Technology**: FastAPI with Uvicorn
- **Main File**: `main.py`
- **Features**:
  - RESTful API endpoints for chat interactions
  - CORS middleware for cross-origin requests
  - Session management with UUID-based identification
  - Health check endpoints
  - Request/response validation with Pydantic

#### 3. **Service Layer** (`app/services/`)
- **File**: `chat_service.py`
- **Responsibilities**:
  - Message processing and routing
  - Conversation history management
  - Context maintenance across sessions
  - Suggestion generation based on user input
  - Integration between API and ML models

#### 4. **AI/ML Model Layer** (`app/models/`)
- **File**: `chatbot_model.py`
- **Core Technologies**:
  - **GPT-2 (DialoGPT)**: For conversational responses
  - **Sentence Transformers**: For semantic understanding and embedding generation
  - **PyTorch**: Deep learning framework
- **Features**:
  - Dual-model approach for different types of queries
  - Medical knowledge embedding and similarity search
  - Context-aware response generation
  - Emergency symptom detection
  - Out-of-scope question filtering

#### 5. **Knowledge Base** (`app/data/`)
- **File**: `medical_data.py`
- **Contents**:
  - Comprehensive medical condition database
  - Symptom-to-condition mappings
  - Warning signs and emergency indicators
  - Common question templates
  - Treatment and cause information

#### 6. **Utility Layer** (`app/utils/`)
- **Components**:
  - Text processing utilities
  - Response formatting
  - Input validation
  - Configuration management

## 🛠️ Technologies Used

### Backend Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **Python** | 3.8+ | Core programming language |
| **FastAPI** | ≥0.88.0 | High-performance web framework |
| **Uvicorn** | ≥0.20.0 | ASGI server |
| **Pydantic** | ≥1.10.0 | Data validation and serialization |

### Machine Learning & AI
| Technology | Version | Purpose |
|------------|---------|---------|
| **PyTorch** | ≥1.13.0 | Deep learning framework |
| **Transformers** | ≥4.25.0 | Pre-trained language models |
| **Sentence-Transformers** | ≥2.2.0 | Semantic embeddings |
| **scikit-learn** | ≥1.1.0 | Machine learning utilities |
| **NumPy** | ≥1.21.0 | Numerical computing |

### Frontend & UI
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | ≥18.2.0 | Modern UI library |
| **Styled-Components** | ≥6.0.0 | CSS-in-JS styling |
| **Axios** | ≥1.4.0 | HTTP client library |
| **Lucide-React** | ≥0.263.1 | Icon library |
| **React-Markdown** | ≥8.0.7 | Markdown rendering |
| **UUID** | ≥9.0.0 | Unique ID generation |

### Data Processing & Storage
| Technology | Version | Purpose |
|------------|---------|---------|
| **Pandas** | ≥1.5.0 | Data manipulation |
| **ChromaDB** | ≥0.4.0 | Vector database |
| **FAISS** | ≥1.7.0 | Similarity search |

### Natural Language Processing
| Technology | Version | Purpose |
|------------|---------|---------|
| **NLTK** | ≥3.8 | Text processing |
| **spaCy** | ≥3.4.0 | Advanced NLP |
| **TextBlob** | ≥0.17.0 | Sentiment analysis |

### Development & Testing
| Technology | Version | Purpose |
|------------|---------|---------|
| **pytest** | ≥7.2.0 | Unit testing |
| **Black** | ≥22.0.0 | Code formatting |
| **Flake8** | ≥5.0.0 | Linting |
| **Pre-commit** | ≥2.20.0 | Git hooks |

### Optional Advanced Features
| Technology | Version | Purpose |
|------------|---------|---------|
| **LangChain** | ≥0.0.300 | LLM orchestration |
| **OpenAI** | ≥0.28.0 | External AI services |
| **Pinecone** | ≥2.2.0 | Vector database cloud |

## 🔄 How It Works

### Workflow Overview

1. **User Interaction**
   - User accesses the React.js web application
   - Enters symptoms or medical questions via modern chat interface
   - Can use quick symptom buttons or free-form text input
   - Session persistence maintains conversation across browser sessions

2. **Request Processing**
   - Frontend sends HTTP request to FastAPI backend
   - Chat service creates or retrieves user session
   - Message is added to conversation history

3. **AI Processing**
   - **Step 1**: Check for general questions (greetings, basic inquiries)
   - **Step 2**: Generate embeddings for the user's input
   - **Step 3**: Search medical knowledge base for similar conditions
   - **Step 4**: Rank matches by semantic similarity

4. **Response Generation**
   - If medical condition found: Generate detailed medical response
   - If general question: Use conversational AI (GPT-2)
   - If emergency symptoms detected: Add urgent care warnings
   - Generate contextual follow-up suggestions

5. **Response Delivery**
   - Formatted response sent back through API
   - Frontend displays response with proper formatting
   - Suggestions displayed as clickable buttons
   - Conversation history maintained

### Dual-Model Approach

#### Medical Information Retrieval
- Uses **Sentence Transformers** to encode user symptoms
- Compares against pre-computed medical condition embeddings
- Returns most relevant conditions with confidence scores
- Generates structured medical information responses

#### Conversational AI
- Uses **GPT-2 (DialoGPT)** for natural language conversations
- Handles greetings, follow-up questions, and clarifications
- Maintains medical context throughout conversations
- Filters out non-medical topics

### Context Management
- **Session-based**: Each user gets a unique session ID
- **History tracking**: Maintains last 5 messages for context
- **Condition memory**: Remembers diagnosed conditions for follow-ups
- **Suggestion system**: Generates relevant next questions

## 📁 Project Structure

```
Medical-Chatbot---Abdominal-Pain-Assistant/
├── app/                          # Backend application
│   ├── data/                     # Medical knowledge base
│   │   ├── medical_data.py       # Condition definitions
│   │   └── training_data.json    # Training datasets
│   ├── models/                   # AI/ML models
│   │   └── chatbot_model.py      # Main chatbot logic
│   ├── services/                 # Business logic
│   │   └── chat_service.py       # Chat management
│   ├── utils/                    # Utility functions
│   │   ├── response_formatter.py # Response formatting
│   │   ├── text_processor.py     # Text processing
│   │   └── validators.py         # Input validation
│   ├── config.py                 # Configuration settings
│   └── main.py                   # FastAPI application
├── frontend-react/               # Modern React.js frontend
│   ├── public/                   # Static assets
│   │   ├── index.html            # HTML template
│   │   └── manifest.json         # PWA manifest
│   ├── src/                      # Source code
│   │   ├── components/           # React components
│   │   │   ├── ChatContainer.js  # Main chat logic
│   │   │   ├── ChatInput.js      # Input component
│   │   │   ├── Message.js        # Message bubbles
│   │   │   └── Sidebar.js        # Info sidebar
│   │   ├── services/             # API services
│   │   │   └── api.js            # Backend communication
│   │   ├── styles/               # Styled components
│   │   │   └── GlobalStyles.js   # UI styling
│   │   ├── App.js                # Main app component
│   │   ├── index.js              # App entry point
│   │   └── index.css             # Global CSS
│   ├── .env                      # Environment variables
│   ├── package.json              # Dependencies
│   └── README.md                 # Frontend docs
├── tests/                        # Test suite
│   └── test_chatbot.py           # Unit tests
├── requirements.txt              # Python dependencies
└── README.md                     # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Python 3.8+ (for backend)
- Node.js 14+ (for React frontend)
- npm or yarn package manager
- 8GB+ RAM (for ML models)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Medical-Chatbot---Abdominal-Pain-Assistant
```

2. **Install Python dependencies**
```bash
pip install -r requirements.txt
```

3. **Install React dependencies**
```bash
cd frontend-react
npm install
cd ..
```

4. **Download ML models** (first run will download automatically)
```bash
python -c "from app.models.chatbot_model import MedicalChatbotModel; m = MedicalChatbotModel(); m.load_models()"
```

### Running the Application

1. **Start the backend server**
```bash
cd app
python main.py
# Server starts at http://localhost:8000
```

2. **Start the React frontend** (in a new terminal)
```bash
cd frontend-react
npm start
# Web app opens at http://localhost:3000
```

### API Endpoints

- `POST /chat` - Send message to chatbot
- `POST /session` - Create new chat session
- `GET /session/{session_id}/history` - Get conversation history
- `GET /health` - Health check

## 🧪 Testing

Run the test suite:
```bash
pytest tests/
```

Test categories:
- Greeting response handling
- Medical knowledge retrieval
- Session management
- Emergency symptom detection
- Out-of-scope question filtering

## 🎯 Key Features

### Medical Capabilities
- **7 Major Conditions**: Gastritis, Appendicitis, IBS, Gallstones, Peptic Ulcers, Food Poisoning, Kidney Stones
- **Symptom Analysis**: Advanced semantic matching of user symptoms
- **Emergency Detection**: Automatic identification of serious warning signs
- **Location-based Diagnosis**: Considers pain location and characteristics

### Technical Features
- **Real-time Chat**: Instant responses with conversation history
- **Context Awareness**: Remembers ongoing conversations
- **Multilingual Support**: Extensible for multiple languages
- **Scalable Architecture**: Microservices-ready design
- **Comprehensive Testing**: Unit tests for all major components

### Safety Features
- **Disclaimer Integration**: Clear medical disclaimers
- **Emergency Warnings**: Prominent alerts for serious symptoms
- **Professional Referral**: Consistent recommendations for medical consultation
- **Scope Limitation**: Stays within abdominal pain domain

## 🔒 Safety & Compliance

- All responses include medical disclaimers
- Emergency symptoms trigger immediate care recommendations
- Application scope limited to educational information
- No storage of personal health information
- Clear boundaries on AI capabilities

## 📈 Future Enhancements

- Integration with telemedicine platforms
- Multi-language support
- Voice input/output capabilities
- Integration with wearable devices
- Electronic health record connectivity
- Advanced symptom tracking
- Doctor referral system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow code style guidelines (Black, Flake8)
4. Add comprehensive tests
5. Submit pull request with detailed description

## 📄 License

This project is intended for educational and research purposes. Medical disclaimers apply to all usage.

---

**⚠️ Medical Disclaimer**: This chatbot provides educational information only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical concerns.
