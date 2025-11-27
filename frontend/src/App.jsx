import React, { useState } from "react";
import axios from "axios";
import ChatMessage from "./ChatMessage";
import Summary from "./Summary";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Send user text to backend
  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      const res = await axios.post("http://localhost:8000/analyze", {
        text: input,
      });

      const sentiment = res.data.sentiment;
      const botReply = res.data.bot;

      const userMessage = {
        sender: "user",
        text: input,
        sentiment,
      };

      const botMessage = {
        sender: "bot",
        text: botReply,
        sentiment: null,
      };

      setMessages((prev) => [...prev, userMessage, botMessage]);
      setInput("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  // Trigger send on Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="max-w-xl mx-auto p-5 mt-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">
        AI Sentiment Chatbot
      </h1>

      {/* Chat Window */}
      <div className="h-96 overflow-y-auto border p-3 bg-gray-50 rounded">
        {messages.map((msg, index) => (
          <ChatMessage key={index} data={msg} />
        ))}
      </div>

      {/* Input Box */}
      <div className="flex mt-4">
        <input
          className="flex-grow p-2 border rounded"
          placeholder="Type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>

      {/* Conversation Summary */}
      <Summary messages={messages} />
    </div>
  );
}

export default App;
