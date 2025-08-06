# ⚛️ Medical Chatbot - React Frontend

This is a modern, responsive React.js frontend for the Medical Chatbot - Abdominal Pain Assistant. It replaces the original Streamlit UI with a more flexible and feature-rich interface that communicates seamlessly with the FastAPI backend.

## ✨ Key Features

- **Responsive Design**: Adapts to both desktop and mobile devices.
- **Modern UI/UX**: Clean, intuitive interface for a better user experience.
- **Component-Based Architecture**: Modular and maintainable code.
- **Session Persistence**: Remembers your conversation even after refreshing the page.
- **Dynamic Suggestions**: Provides AI-generated follow-up questions.
- **Quick Symptom Buttons**: Easy access to common symptoms.
- **Real-time Feedback**: Loading indicators and connection status.
- **Markdown Support**: Renders formatted medical information.

## 🛠️ Technologies Used

| Technology          | Purpose                             |
|---------------------|-------------------------------------|
| **React**           | Core UI library                     |
| **Axios**           | HTTP client for API communication   |
| **Styled-components** | CSS-in-JS for styling               |
| **Lucide-React**      | Icon library                        |
| **React-Markdown**  | Rendering markdown content        |
| **UUID**            | Generating unique IDs for messages  |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- A running instance of the FastAPI backend (at `http://localhost:8000`)

### Installation

1.  **Navigate to the frontend directory**
    ```bash
    cd frontend-react
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the development server**
    ```bash
    npm start
    ```

2.  **Open your browser** to [http://localhost:3000](http://localhost:3000)

### Building for Production

1.  **Create a production-ready build**
    ```bash
    npm run build
    ```

2.  The optimized static files will be located in the `build/` directory.

### Testing

-   Run the test suite:
    ```bash
    npm test
    ```

## 📁 Project Structure

```
frontend-react/
├── public/                # Static assets and HTML template
│   ├── index.html
│   └── manifest.json
├── src/                   # Main source code
│   ├── components/        # Reusable React components
│   │   ├── ChatContainer.js # Main chat logic
│   │   ├── ChatInput.js   # User input area
│   │   ├── Message.js     # Individual message bubble
│   │   └── Sidebar.js     # Sidebar with info and controls
│   ├── services/          # API communication layer
│   │   └── api.js         # Axios setup and API calls
│   ├── styles/            # Styling-related files
│   │   └── GlobalStyles.js # Styled components
│   ├── App.js             # Main application component
│   ├── index.css          # Global CSS styles
│   └── index.js           # Application entry point
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
└── README.md              # This file
```

## 🔄 How It Works

-   The application initializes by checking for a connection to the backend and creating a new chat session if one doesn't exist.
-   The user's conversation `sessionId` is stored in `localStorage` to persist the session across page reloads.
-   When a user sends a message, it is first displayed in the UI, and then an API request is made to the backend.
-   The backend processes the message, and the response (including the bot's reply and suggestions) is displayed in the UI.
-   The UI provides real-time feedback with loading indicators and connection status updates.

---

This React frontend is designed to be a robust and user-friendly replacement for the original Streamlit UI, offering a more modern and interactive experience for users of the Medical Chatbot.
