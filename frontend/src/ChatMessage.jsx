const ChatMessage = ({ data }) => {
  return (
    <div
      className={`my-2 p-3 rounded-lg max-w-xs ${
        data.sender === "user"
          ? "ml-auto bg-green-200"
          : "mr-auto bg-blue-200"
      }`}
    >
      <p>{data.text}</p>

      {data.sender === "user" && (
        <p className="text-sm mt-1 text-gray-700">
          Sentiment: <b>{data.sentiment.label}</b> (Score: {data.sentiment.score})
        </p>
      )}
    </div>
  );
};

export default ChatMessage;
