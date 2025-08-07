import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-green-500">
      <h1 className="text-4xl mb-8">Welcome to Smils</h1>
      <div className="space-x-4">
        <button
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}
