import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/mrbelpko", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="flex items-center justify-between pt-16 ">

    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{  duration: 1 }}
    className="max-w-md mx-auto p-6 bg-black shadow-lg rounded-lg shadow-green-300 ">
      <h2 className="text-xl font-semibold text-black mb-4">Message Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md bg-green-100 text-black"
          />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md bg-green-100 text-black"
          />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md bg-green-100 text-black"
          />
        <button type="submit" className="w-full p-2 bg-green-700 text-white rounded-md">
          Send Message
        </button>
      </form>
      {status && <p className="mt-2 text-center text-gray-600">{status}</p>}
    </motion.div>
</div>
  );
}
