"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/pets/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send.");
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50 py-12 px-4"
    >
      <motion.div
        className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          📬 Contact Us
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "message"].map((field, i) => (
            <motion.div key={field} custom={i} initial="hidden" animate="visible" variants={fadeInUp}>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field as keyof typeof form]}
                  onChange={handleChange}
                  required
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  className="w-full border px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              ) : (
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="w-full border px-4 py-3 rounded-lg shadow-sm resize-none focus:ring-2 focus:ring-green-500 focus:outline-none"
                  rows={5}
                />
              )}
            </motion.div>
          ))}

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={3}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-green-700 transition"
            >
              Send Message
            </motion.button>
          </motion.div>

          {status && (
            <motion.p
              className="text-center text-sm text-gray-600 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {status}
            </motion.p>
          )}
        </form>
      </motion.div>
    </motion.main>
  );
}
