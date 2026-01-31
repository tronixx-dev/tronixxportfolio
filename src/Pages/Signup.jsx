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
        "https://my-project-xkha.vercel.app/post-user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || data.error || "Signup failed");

      toast.success("Signed up successfully!");
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-white shadow-xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">
            Create an <span className="text-blue-500">Account</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Join and showcase your presence
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
              placeholder="yourusername"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="you@email.com"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Bio <span className="text-gray-500">(optional)</span>
            </label>
            <textarea
              name="bio"
              value={userData.bio}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us a bit about yourself..."
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}
