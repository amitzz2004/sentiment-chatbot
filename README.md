
📘 AI Sentiment Chatbot — Full Stack Application

This project is a full-stack AI Sentiment Chatbot built using:

Python FastAPI (Backend)

React + TailwindCSS (Frontend)

TextBlob for sentiment analysis

Custom NLP-based chatbot engine for intelligent replies

The application conducts a natural, interactive conversation with the user while performing real-time sentiment analysis on each message. At the end of the interaction, the system generates a conversation sentiment summary, including message-level sentiment and an emotional trend chart.
This project fulfills Tier 1 and Tier 2 requirements for your assignment.
<img width="580" height="527" alt="image" src="https://github.com/user-attachments/assets/36fa33f6-14a6-4ca7-8aef-a4400a2bf45f" />


⭐ Features
✅ 1. Intelligent Chatbot

The chatbot is not static— it uses a custom NLP ruleset to generate meaningful responses. It understands:

Greetings

Emotions (happy, sad, angry)

Common conversational phrases

Goodbye messages

General inputs with smart fallback replies

✅ 2. Sentiment Analysis (Tier 1 + Tier 2)

Performs statement-level sentiment analysis

Shows sentiment label + polarity score per message

Computes overall sentiment of the entire chat

Displays a mood trend showing emotional changes across the conversation

<img width="531" height="262" alt="image" src="https://github.com/user-attachments/assets/a729b362-abf2-4e15-be0f-0cd4775269a2" />

✅ 3. Modern, Responsive UI

The frontend is built with React and TailwindCSS and includes:

Chat bubbles for user and bot messages

Auto-scrolling chat window

Input box with Enter-key support

Clean & minimal design

Real-time updates without page reload

✅ 4. FastAPI Backend

The backend handles:

Sentiment analysis using TextBlob

Generating intelligent chatbot replies

Communicating with the frontend through a /analyze API endpoint

CORS handling for browser compatibility

🔧 Tech Stack
Frontend

React

TailwindCSS

Axios

Backend

Python

FastAPI

TextBlob

Uvicorn

📁 Project Structure
sentiment-chatbot/
│── backend/
│   ├── main.py
│   ├── sentiment_logic.py
│   ├── requirements.txt
│
│── frontend/
│   ├── public/
│   ├── src/
│   │    ├── App.jsx
│   │    ├── ChatMessage.jsx
│   │    ├── Summary.jsx
│   │    ├── index.css
│   │    ├── index.js
│   ├── package.json
<img width="292" height="487" alt="image" src="https://github.com/user-attachments/assets/1a49f09b-dcc6-433b-bf2c-c6543c8505bc" />


🚀 How to Run the Project
1️⃣ Backend Setup (FastAPI)
cd sentiment-chatbot/backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
python -m textblob.download_corpora
uvicorn main:app --reload --port 8000


Backend will start at:
👉 http://localhost:8000

2️⃣ Frontend Setup (React + Tailwind)
cd sentiment-chatbot/frontend
npm install
npm start


Frontend will start at:
👉 http://localhost:3000

🎮 How It Works

User types a message

React sends it to the FastAPI backend

Backend returns:

bot response

sentiment label

sentiment score

React displays the bot reply + message sentiment

At the bottom, the app shows:

overall conversation sentiment

mood trend across messages

📊 Example Output

User: I feel sad today
→ Sentiment: Negative
Bot: I'm sorry you're feeling sad. Want to talk about it?

User: I'm okay now
→ Sentiment: Positive
Bot: That’s good to hear!

Final Summary:
Overall Sentiment: Neutral
Mood Trend: - ++

🎯 Why This Project Is Useful

Demonstrates full-stack development skills

Integrates sentiment analysis + chatbot intelligence

Shows frontend-backend communication

Fulfills academic Tier 1 & Tier 2 AI chatbot requirements

Easy to extend with GPT, Firebase, or MongoDB
