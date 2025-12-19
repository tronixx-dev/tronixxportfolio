import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://my-project-xkha.vercel.app/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || data.error || "Login failed");

      toast.success("Login successful!");
      console.log("Logged in user:", data.existingUser);

      // Store token for later use
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.existingUser));

      // Redirect to dashboard or home
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Login</h1>

      <form className="flex flex-col w-full max-w-md gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          Email
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border border-black p-2 rounded"
            required
          />
        </label>

        <label className="flex flex-col">
          Password
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border border-black p-2 rounded"
            required
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-blue-600 text-white rounded mt-4"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
