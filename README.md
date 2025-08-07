## **🏥 Medical Chatbot - Abdominal Pain Assistant**



**Technology Used 🛠️**
---


**Backend (The Engine Room):**



**Python:** The main programming language used to build everything.



**FastAPI:** A super-efficient "waiter" that takes requests from the website and brings them to the chatbot's brain to get a response.



**Machine Learning (The Brains):**



**PyTorch:** The foundational "engine" that powers the AI models.



Transformers \& Sentence-Transformers: These are like specialized toolkits. One helps the bot chat naturally, and the other helps it understand the meaning and context of sentences, not just the words.


Frontend Layer (The Face of the App)

Location: frontend-react/
Tech Stack: React.js + Styled Components

Features:
	•	Modern, real-time chat interface
	•	Sidebar with medical information and emergency alerts
	•	Connection status indicator (“Connected” / “Disconnected”)
	•	AI-generated dynamic suggestions
	•	Quick symptom selection buttons
	•	Markdown support for formatted answers
	•	Session persistence using localStorage
	•	Fully responsive and mobile-first design

To View the App:
Open your browser at http://localhost:3000

⸻

Backend API Layer (The Engine Room)

Location: app/
Tech Stack: Python + FastAPI + Uvicorn

Main File: main.py

Features:
	•	RESTful API endpoints for chat interactions
	•	CORS middleware for cross-origin communication
	•	UUID-based session management
	•	Health check endpoints
	•	Request/response validation via Pydantic

⸻

Service Layer (The Project Manager)

Location: app/services/
Main File: chat_service.py

Responsibilities:
	•	Message processing and routing
	•	Maintaining conversation context across messages
	•	Managing conversation history
	•	Generating smart suggestions
	•	Bridging frontend requests with AI model responses

⸻

Machine Learning Layer (The Brain)

Location: app/models/
Core Technologies: PyTorch, Transformers, Sentence-Transformers

Main File: chatbot_model.py

Components:
	•	The Detective
Uses SentenceTransformer to interpret symptom descriptions and find the most relevant medical topic from the knowledge base.
	•	The Conversationalist
Uses GPT-2 to handle natural conversation, answer follow-up questions, greetings, and expand on a known topic intelligently.

⸻

Knowledge Base (The Medical Library)

Location: app/data/medical_data.py
A structured file containing all relevant symptom information, causes, conditions, and medical definitions. The AI can only answer based on this data.

⸻

⚙️ How the Project Works

⸻

🧠 Step-by-Step Workflow:

⸻

🔹 1. Initial Question:

You type: “I have sharp pain in my upper right abdomen”

	•	React frontend captures the message and sends it to the FastAPI backend.
	•	FastAPI passes the message to the Chat Service.
	•	Since it’s the first message, there’s no context.
	•	The Chatbot Model is invoked. It uses the Detective (SentenceTransformer) to find the closest matching medical topic — say, “gallstones.”
	•	A brief summary about gallstones is generated and returned.
	•	Context is saved as “gallstones” for the session.
	•	Response is shown in the React UI.

⸻

🔹 2. Follow-up Question:

You type: “What causes it?”

	•	React frontend sends the follow-up to the backend.
	•	Chat Service now includes previous context: “gallstones”
	•	It asks the Chatbot Model to answer specifically about gallstones.
	•	The Conversationalist (GPT-2) retrieves causes of gallstones from the knowledge base.
	•	A precise, context-aware answer is generated.
	•	Displayed in the chat interface, continuing a natural flow.

⸻

✅ Why It Feels Smart
	•	Remembers Context: Doesn’t repeat information unnecessarily.
	•	Follows Up Intelligently: Understands pronouns like “it” in context.
	•	Dual Intelligence: Combines semantic search (Detective) with natural dialogue (Conversationalist).
	•	Frontend Power: Clean, modern interface enhances user experience.

