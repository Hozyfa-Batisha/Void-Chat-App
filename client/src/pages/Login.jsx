import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill in all fields");
      return;
    }

    // Simulate login
    console.log("Logging in with:", form);
    navigate("/chatroom"); // Redirect to chatroom selection
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md border border-green-600"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 bg-black border border-green-500 rounded focus:outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 bg-black border border-green-500 rounded focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
        >
          Login
        </button>

        <p
          className="text-sm mt-4 text-center cursor-pointer hover:underline"
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register
        </p>
      </form>
    </div>
  );
}

export default Login;
