const Summary = ({ messages }) => {
  const userMessages = messages.filter((m) => m.sender === "user");

  if (userMessages.length === 0) return null;

  const avg =
    userMessages.reduce((acc, m) => acc + m.sentiment.score, 0) /
    userMessages.length;

  const overall =
    avg > 0.1 ? "Positive" : avg < -0.1 ? "Negative" : "Neutral";

  return (
    <div className="mt-6 p-4 bg-yellow-100 rounded border">
      <h2 className="font-bold text-lg mb-2">Conversation Summary</h2>
      <p>
        Overall Sentiment:{" "}
        <span className="font-semibold">{overall}</span>
      </p>

      <h3 className="font-semibold mt-3">Mood Trend:</h3>
      <div className="font-mono text-sm">
        {userMessages.map((m, i) => {
          const bars =
            m.sentiment.score > 0
              ? "+".repeat(Math.ceil(m.sentiment.score * 10))
              : "-".repeat(Math.ceil(Math.abs(m.sentiment.score * 10)));

          return (
            <div key={i}>
              Message {i + 1}: {bars || "0"}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Summary;
