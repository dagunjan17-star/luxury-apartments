"use client";

import { useState } from "react";

export default function ContactPopup({ isOpen, onClose, propertyTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.phone.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          propertyTitle,
          source: "Popup Enquiry",
        }),
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();

      if (data.success) {
        setFormData({ name: "", phone: "", message: "" });
        alert("Enquiry Submitted Successfully!");
        onClose();
      } else {
        setError("Something went wrong. Please try again.");
      }

    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4">

  <div
    className="
    relative overflow-hidden
    bg-white
    w-full max-w-md
    rounded-3xl
    p-8
    shadow-[0_25px_70px_rgba(0,0,0,0.25)]
    border border-[#FF5A5A]/20
  "
  >
    {/* Glow Effects */}
    <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#FF5A5A]/20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#FF3B3B]/20 rounded-full blur-3xl"></div>

    <div className="relative z-10">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="
        absolute top-0 right-0
        w-10 h-10
        flex items-center justify-center
        rounded-full
        text-gray-400
        hover:bg-red-50
        hover:text-[#FF5A5A]
        transition
      "
      >
        ×
      </button>

      {/* Badge */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-[#FF5A5A] text-xs font-semibold mb-4">
        Free Consultation
      </div>

      {/* Heading */}
      <h3 className="text-3xl font-bold text-gray-900">
        Find Your Dream Luxury Apartment
      </h3>

      {/* Property Name */}
      <p className="text-sm text-gray-600 mt-3 mb-7 leading-relaxed">
        Enquiry for:
        <span className="block font-semibold text-[#FF5A5A] mt-1">
          {propertyTitle}
        </span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Name */}
        <input
          name="name"
          required
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="
          w-full px-4 py-3
          border border-[#FF5A5A]/20
          rounded-xl
          bg-red-50
          text-gray-900
          placeholder-gray-400
          focus:ring-2 focus:ring-[#FF5A5A]
          focus:border-[#FF5A5A]
          outline-none
          transition
        "
        />

        {/* Phone */}
        <input
          name="phone"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="
          w-full px-4 py-3
          border border-[#FF5A5A]/20
          rounded-xl
          bg-red-50
          text-gray-900
          placeholder-gray-400
          focus:ring-2 focus:ring-[#FF5A5A]
          focus:border-[#FF5A5A]
          outline-none
          transition
        "
        />

        {/* Message */}
        <textarea
          name="message"
          rows="4"
          placeholder="Tell us about your apartment requirements..."
          value={formData.message}
          onChange={handleChange}
          className="
          w-full px-4 py-3
          border border-[#FF5A5A]/20
          rounded-xl
          bg-red-50
          text-gray-900
          placeholder-gray-400
          focus:ring-2 focus:ring-[#FF5A5A]
          focus:border-[#FF5A5A]
          outline-none
          resize-none
          transition
        "
        />

        {/* Error */}
        {error && (
          <p className="text-sm text-red-500 font-medium">
            {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="
          w-full py-3
          rounded-xl
          font-semibold
          text-white
          bg-gradient-to-r
          from-[#FF5A5A]
          to-[#FF3B3B]
          hover:from-[#FF4545]
          hover:to-[#E62E2E]
          transition-all duration-300
          shadow-lg
          disabled:opacity-60
        "
        >
          {loading
            ? "Submitting..."
            : "Submit Enquiry"}
        </button>

      </form>

    </div>
  </div>

</div>
  );
}