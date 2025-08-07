"use client";

import { useState } from "react";

export default function VetAppointmentPage() {
  const [form, setForm] = useState({
    petName: "",
    ownerName: "",
    email: "",
    species: "",
    date: "",
    time: "",
    reason: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const res = await fetch("/api/pets/vet-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          petName: "",
          ownerName: "",
          email: "",
          species: "",
          date: "",
          time: "",
          reason: "",
        });
      } else {
        const result = await res.json();
        setError(result?.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSuccess(false);
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Book a Vet Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          ["Pet Name", "petName"],
          ["Owner Name", "ownerName"],
          ["Your Email", "email"],
          ["Species", "species"],
        ].map(([label, name]) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type={name === "email" ? "email" : "text"}
              name={name}
              value={form[name as keyof typeof form]}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
        ))}

        <div>
          <label className="block font-medium mb-1">Appointment Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Time</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Reason for Visit</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            rows={3}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>

      {success && (
        <p className="text-green-600 mt-4 text-center font-medium">
          Appointment booked successfully!
        </p>
      )}

      {error && (
        <p className="text-red-600 mt-4 text-center font-medium">{error}</p>
      )}
    </div>
  );
}
