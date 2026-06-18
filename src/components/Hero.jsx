"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import AlertPopup from "@/components/AlertPopup";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

   const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
  open: false,
  type: "",
  message: "",
});

  

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

    if (formData.phone.length !== 10) {
 setPopup({
  open: true,
  type: "error",
  message: "Phone number must be 10 digits",
});      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website:"luxuryapartementingurgaon.com",
        }),
      });

      const result = await res.json();

      if (result.success) {
setPopup({
  open: true,
  type: "success",
  message: "Enquiry submitted successfully!",
});
        setFormData({ name: "", phone: "", message: "" });
      } else {
 setPopup({
  open: true,
  type: "error",
  message: "Something went wrong. Try again.",
});
      }
    } catch (err) {
setPopup({
  open: true,
  type: "error",
  message: "Server error. Please try later.",
});
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative px-4 sm:px-6 py-10
      bg-gradient-to-br from-[#1a1405] via-[#2b1f08] to-[#140d03]"
    >
    <AlertPopup
    open={popup.open}
    type={popup.type}
    message={popup.message}
    onClose={() =>
      setPopup({
        open: false,
        type: "",
        message: "",
      })
    }
  />
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        {/* LEFT CONTENT */}
<div className="md:col-span-7 lg:col-span-8 text-white">
  <h1 className="text-2xl lg:text-3xl font-bold mb-6 leading-tight">
    Explore Premium Luxury Apartments & Properties in Gurgaon,{" "}
    <span className="text-[#FF5A5A]">
      — Buy, Sell & Rent Elite Homes in Gurugram
    </span>
  </h1>

  <p className="text-sm max-w-5xl text-gray-300 leading-relaxed">
   Gurgaon stands today as the undisputed capital of luxury real estate in North India. From sky-high ultra-premium penthouses overlooking the Aravalli hills to sprawling gated villa communities with world-class amenities, the Gurugram luxury property market offers a lifestyle experience that is unmatched anywhere in the National Capital Region. If you are seeking a prestigious address, a high-yield luxury investment, or an elite rental home that matches the pace and aspiration of your life, you have arrived at the right destination. Welcome to Gurgaon's most comprehensive luxury property directory — a curated, trusted platform where India's finest residential properties across Gurugram are listed in one authoritative, easy-to-navigate destination.
Our directory showcases verified luxury apartments, premium penthouses, ultra-luxury villas, high-end builder floors, and exclusive gated community residences across Gurgaon's most coveted addresses — Golf Course Road, Golf Course Extension Road, DLF 5, Sohna Road, Dwarka Expressway, Sector 42, Sector 54, Sector 65, and the prestigious Southern Peripheral Road corridor. Whether you are a discerning homebuyer seeking a 4 BHK luxury apartment with concierge services and sky lounges, an investor looking to capitalise on Gurgaon's booming premium property appreciation, or a senior executive requiring a fully furnished luxury rental close to Cyber City or Udyog Vihar, our platform brings you the most complete and current inventory of elite properties in Gurugram.
Every listing on our platform is detailed, verified, and presented with high-resolution imagery, complete amenity information, carpet area specifications, builder credentials, RERA registration details, and pricing transparency — so your luxury property search in Gurgaon is never a guessing game. Stop scrolling through generic portals crowded with mid-range listings. Begin your premium property journey here, where luxury is the baseline, not the exception. Explore listings, compare properties, and take the first step toward your most prestigious address in Gurgaon today.

  </p>
</div>

{/* RIGHT GLASS FORM */}
<div className="md:col-span-5 lg:col-span-4">
  <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-2xl border border-[#FF5A5A]/30 shadow-2xl text-white">

    <h2 className="text-2xl font-semibold mb-2 text-[#FF5A5A]">
      Free Consultation
    </h2>

    <p className="text-sm mb-6 text-gray-400">
      Fill your details and our Gurgaon property expert will contact you shortly.
    </p>

    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        name="name"
        required
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg 
        bg-white/10 border border-white/20
        text-white placeholder-white/60
        focus:ring-2 focus:ring-[#FF5A5A]
        focus:border-[#FF5A5A]
        outline-none transition"
      />

      <input
        name="phone"
        required
        inputMode="numeric"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg 
        bg-white/10 border border-white/20
        text-white placeholder-white/60
        focus:ring-2 focus:ring-[#FF5A5A]
        focus:border-[#FF5A5A]
        outline-none transition"
      />

      <textarea
        rows="3"
        name="message"
        placeholder="Your Property Requirement"
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg 
        bg-white/10 border border-white/20
        text-white placeholder-white/60
        focus:ring-2 focus:ring-[#FF5A5A]
        focus:border-[#FF5A5A]
        outline-none resize-none transition"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg font-semibold 
        bg-gradient-to-r from-[#FF5A5A] to-[#FF3B3B]
        hover:from-[#FF4545] hover:to-[#E62E2E]
        transition duration-300 
        disabled:opacity-70 shadow-lg text-white"
      >
        {loading ? "Submitting..." : "Submit Enquiry"}
      </button>

    </form>
  </div>
</div>

      </div>
    </section>
  );
};

export default HeroSection;