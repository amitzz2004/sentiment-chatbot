from fastapi import FastAPI
from pydantic import BaseModel
from sentiment_logic import analyze_sentiment
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    text: str

# ------------------
# Simple NLP Chatbot
# ------------------

def smart_bot_response(user_text):
    text = user_text.lower()

    # Greetings
    if any(w in text for w in ["hello", "hi", "hey"]):
        return random.choice([
            "Hi! How can I help you today?",
            "Hello! How are you feeling today?",
            "Hey! What's on your mind?"
        ])

    # Feelings
    if "how are you" in text:
        return "I'm doing great! Thanks for asking. How are you feeling today?"

    if "sad" in text:
        return "I'm sorry you're feeling sad. Want to talk about it?"

    if "happy" in text:
        return "That's wonderful! What's making you feel happy today?"

    if "angry" in text:
        return "Anger is normal. What happened?"

    # Asking about user
    if "what can you do" in text:
        return "I can chat with you, understand what you say, and analyze the sentiment of our conversation!"

    # Farewell
    if any(w in text for w in ["bye", "goodbye"]):
        return "Goodbye! It was great talking with you."

    # Default fallback
    return random.choice([
        "Tell me more...",
        "Interesting, go on...",
        "Why do you think so?",
        "Hmm, I understand. Continue!",
        "Can you explain that more?"
    ])


@app.post("/analyze")
def analyze(message: Message):
    sentiment = analyze_sentiment(message.text)
    bot_reply = smart_bot_response(message.text)

    return {
        "sentiment": sentiment,
        "bot": bot_reply
    }
