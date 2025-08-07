import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    socket.emit("send_message", { user: "You", text: message });
    setChat((prev) => [...prev, { user: "You", text: message }]);
    setMessage("");
  };

  return (
    <div className="bg-black border border-green-500 p-4 h-[80vh] overflow-y-auto mb-2">
      {chat.map((msg, idx) => (
        <div key={idx}>
          <span className="text-green-300">[{msg.user}]</span> {msg.text}
        </div>
      ))}

      <form onSubmit={sendMessage}>
        <span className="text-green-300">[You]</span>{" "}
        <input
          className="bg-black border-none outline-none text-green-500 w-3/4"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}

export default Chat;
