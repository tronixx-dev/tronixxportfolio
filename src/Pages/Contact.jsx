import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "https://my-project-xkha.vercel.app/post-contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-white shadow-xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-3">
            Get in <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-gray-400">
            Have a project or idea? Let’s talk.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
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
              value={formData.email}
              onChange={handleChange}
              placeholder="john@email.com"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+234 000 000 0000"
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about your project..."
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
