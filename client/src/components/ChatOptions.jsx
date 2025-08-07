import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChatOptions() {
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (!roomName.trim()) {
      alert("Please enter a room name");
      return;
    }
    navigate("/chat", { state: { roomName } });
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md border border-green-600">
      <h2 className="text-2xl font-bold mb-6 text-center">Join or Create Chatroom</h2>

      <input
        type="text"
        placeholder="Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        className="w-full mb-6 px-4 py-2 bg-black border border-green-500 rounded focus:outline-none"
      />

      <button
        onClick={handleJoin}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
      >
        Enter Room
      </button>
    </div>
  );
}

export default ChatOptions;
