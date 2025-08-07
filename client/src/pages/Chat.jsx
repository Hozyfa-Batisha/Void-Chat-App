import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Chat() {
  const location = useLocation();
  const roomName = location.state?.roomName || "Unknown Room";
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!newMsg.trim()) return;
    setMessages([...messages, { sender: "You", text: newMsg }]);
    setNewMsg("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Room: {roomName}</h1>

      <div className="flex-1 w-full max-w-2xl bg-gray-900 border border-green-600 rounded-lg p-4 mb-4 overflow-y-auto max-h-[60vh]">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold text-green-300">{msg.sender}:</span>{" "}
            <span>{msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="w-full max-w-2xl flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 px-4 py-2 bg-black border border-green-500 rounded focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
