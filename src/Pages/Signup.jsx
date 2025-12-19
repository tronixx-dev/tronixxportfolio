import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://my-project-xkha.vercel.app/post-user", // your preferred endpoint
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || data.error || "Signup failed");

      toast.success("Signed up successfully!");
      console.log("New user:", data.user);

      navigate("/"); // Redirect after signup
    } catch (error) {
      console.error("Signup error:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Signup</h1>

      <form className="flex flex-col w-full max-w-md gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          Username
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="border border-black p-2 rounded"
            required
          />
        </label>

        <label className="flex flex-col">
          Email
          <input
            type="email"
            name="email"
            value={userData.email}
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
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border border-black p-2 rounded"
            required
          />
        </label>

        <label className="flex flex-col">
          Bio
          <textarea
            name="bio"
            value={userData.bio}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about yourself"
            className="border border-black p-2 rounded"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-green-600 text-white rounded mt-4"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
