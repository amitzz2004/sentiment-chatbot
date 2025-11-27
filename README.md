# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


📘 AI Sentiment Chatbot — Full Stack Application

This project is a full-stack AI Sentiment Chatbot built using:

Python FastAPI (Backend)

React + TailwindCSS (Frontend)

TextBlob for sentiment analysis

Custom NLP-based chatbot engine for intelligent replies

The application conducts a natural, interactive conversation with the user while performing real-time sentiment analysis on each message. At the end of the interaction, the system generates a conversation sentiment summary, including message-level sentiment and an emotional trend chart.
This project fulfills Tier 1 and Tier 2 requirements for your assignment.

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