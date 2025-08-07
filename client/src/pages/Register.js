import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (username.trim()) {
      // احفظ اسم المستخدم مؤقتًا (ممكن نطوره لاحقًا)
      localStorage.setItem("username", username);

      // بعد التسجيل نروح لاختيار الروم
      navigate("/chatroom");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-green-500">
      <h2 className="text-3xl mb-6">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col space-y-4 w-64">
        <input
          type="text"
          placeholder="Choose a username"
          className="p-2 rounded bg-gray-900 text-green-400 outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          className="bg-green-600 py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}