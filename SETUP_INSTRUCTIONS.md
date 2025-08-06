# 🚀 Complete Setup Instructions

## Medical Chatbot - Abdominal Pain Assistant with React Frontend

This guide will help you set up both the FastAPI backend and the new React.js frontend for the Medical Chatbot.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.8+** (for backend)
- **Node.js 14+** (for React frontend) - [Download from nodejs.org](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **Git** (for cloning the repository)
- **8GB+ RAM** (recommended for ML models)

### Verify Prerequisites

```bash
python --version    # Should be 3.8+
node --version      # Should be 14+
npm --version       # Should be 6+
```

## 🏗️ Installation Steps

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Medical-Chatbot---Abdominal-Pain-Assistant-main
```

### 2. Backend Setup (FastAPI + AI Models)

#### Install Python Dependencies
```bash
# Create virtual environment (optional but recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

#### Download AI Models
```bash
# This will download GPT-2 and Sentence Transformers models (first run only)
python -c "from app.models.chatbot_model import MedicalChatbotModel; m = MedicalChatbotModel(); m.load_models()"
```

### 3. Frontend Setup (React.js)

#### Install Node.js Dependencies
```bash
cd frontend-react
npm install
cd ..
```

## ▶️ Running the Application

### Method 1: Run Both Services Manually

#### Terminal 1 - Start the Backend
```bash
cd app
python main.py
```
✅ Backend will be available at: `http://localhost:8000`

#### Terminal 2 - Start the Frontend
```bash
cd frontend-react
npm start
```
✅ Frontend will be available at: `http://localhost:3000`

### Method 2: Quick Start Script (Windows)

Create a file called `start.bat`:
```batch
@echo off
start cmd /k "cd /d app && python main.py"
timeout /t 3
start cmd /k "cd /d frontend-react && npm start"
```

### Method 3: Quick Start Script (macOS/Linux)

Create a file called `start.sh`:
```bash
#!/bin/bash
cd app && python main.py &
sleep 3
cd frontend-react && npm start &
wait
```

Make it executable:
```bash
chmod +x start.sh
./start.sh
```

## 🧪 Testing the Setup

### 1. Test Backend API

```bash
curl http://localhost:8000/health
# Expected response: {"status":"healthy","service":"medical-chatbot"}
```

### 2. Test Frontend

Open your browser to `http://localhost:3000` and you should see:
- Modern chat interface
- Sidebar with medical information
- Connection status indicator (should show "Connected")

### 3. Test Full Integration

1. Type "hello" in the chat interface
2. You should receive a greeting from the medical assistant
3. Try "I have stomach pain" to test medical functionality
4. Verify that suggestions appear below the input

## 🔧 Configuration

### Environment Variables

#### Backend Configuration (`app/config.py`)
```python
API_HOST = "0.0.0.0"
API_PORT = 8000
MODEL_NAME = "microsoft/DialoGPT-medium"
EMBEDDING_MODEL = "sentence-transformers/all-MiniLM-L6-v2"
```

#### Frontend Configuration (`frontend-react/.env`)
```env
REACT_APP_API_URL=http://localhost:8000
GENERATE_SOURCEMAP=false
BROWSER=none
FAST_REFRESH=true
```

## 🛠️ Development Mode

### Hot Reloading

- **Backend**: The FastAPI server automatically reloads when you modify Python files
- **Frontend**: The React development server automatically reloads when you modify component files

### Making Changes

1. **Backend changes**: Edit files in `app/` directory
2. **Frontend changes**: Edit files in `frontend-react/src/` directory
3. **Styling changes**: Modify styled-components in `frontend-react/src/styles/`

## 🏗️ Production Build

### Build React for Production

```bash
cd frontend-react
npm run build
```

The production files will be in `frontend-react/build/`

### Serve Production Build

You can serve the production build using a simple HTTP server:

```bash
cd frontend-react/build
python -m http.server 3000
```

Or use a proper web server like Nginx or Apache.

## 🚨 Troubleshooting

### Common Issues

#### 1. "Module not found" errors (Python)
```bash
pip install -r requirements.txt
```

#### 2. "npm command not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation

#### 3. "Port already in use"
```bash
# Kill processes using ports 3000 or 8000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <process_id> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

#### 4. CORS errors in browser
- Ensure FastAPI backend has CORS middleware enabled (it should by default)
- Check that frontend is accessing `http://localhost:8000`

#### 5. ML Models not loading
- Ensure you have 8GB+ RAM available
- Check internet connection (models download on first run)
- Clear Python cache: `python -c "import transformers; transformers.file_utils.default_cache_path"`

### Connection Issues

If the frontend shows "Offline" status:

1. Verify backend is running on port 8000
2. Check firewall settings
3. Ensure no proxy is interfering
4. Try accessing `http://localhost:8000/health` directly

## 📊 Performance Tips

### Backend Optimization
- Use GPU if available (will be auto-detected)
- Increase `MAX_RESPONSE_LENGTH` in config for longer responses
- Adjust `BATCH_SIZE` based on available RAM

### Frontend Optimization
- The React app is already optimized for production builds
- Use `npm run build` for deployment
- Enable service worker for offline functionality

## 🔒 Security Notes

- This setup is for development/demo purposes
- In production, use proper authentication
- Configure CORS properly for your domain
- Use HTTPS in production
- Sanitize user inputs (already implemented)

## 📱 Mobile Access

The React frontend is fully responsive and works on mobile devices:
- Access via `http://your-local-ip:3000` from mobile devices on the same network
- UI automatically adapts to smaller screens
- Touch-friendly interface

## 🆘 Getting Help

If you encounter issues:

1. Check the console logs in both terminal windows
2. Open browser developer tools (F12) to check for JavaScript errors
3. Verify all prerequisites are installed correctly
4. Ensure all ports (3000, 8000) are available

## ✅ Success Checklist

- [ ] Python 3.8+ installed
- [ ] Node.js 14+ installed
- [ ] Backend dependencies installed (`pip install -r requirements.txt`)
- [ ] Frontend dependencies installed (`npm install`)
- [ ] AI models downloaded successfully
- [ ] Backend running on `http://localhost:8000`
- [ ] Frontend running on `http://localhost:3000`
- [ ] Can send messages and receive responses
- [ ] Connection status shows "Connected"
- [ ] Suggestions appear after medical queries

🎉 **Congratulations!** Your Medical Chatbot with React frontend is now running successfully!

---

**Note**: The first run may take longer due to AI model downloads. Subsequent runs will be much faster.
