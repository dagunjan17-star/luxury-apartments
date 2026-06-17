"use client"

import { useState } from "react"
import Image from "next/image"
import AlertPopup from "@/components/AlertPopup"
import Breadcrumb from "@/components/Breadcrumb";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const [alertData, setAlertData] = useState({
    open: false,
    type: "",
    message: "",
  })

  const showAlert = (type, message) => {
    setAlertData({
      open: true,
      type,
      message,
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return
      if (value.length > 10) return
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.phone.length !== 10) {
      showAlert("error", "Phone number must be 10 digits")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          website: "luxuryapartmentingurgaon.com",
        }),
      })

      const result = await res.json()

      if (result.success) {
        showAlert("success", "Your inquiry has been submitted!")

        setFormData({
          name: "",
          phone: "",
          message: "",
        })
      } else {
        showAlert(
          "error",
          "Something went wrong. Please try again."
        )
      }
    } catch (err) {
      showAlert(
        "error",
        "Server error. Please try later."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <AlertPopup
        open={alertData.open}
        type={alertData.type}
        message={alertData.message}
        onClose={() =>
          setAlertData((prev) => ({
            ...prev,
            open: false,
          }))
        }
      />

      <section className="bg-gradient-to-b from-white to-[#FFF5F5] py-8 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    <div className="mb-6 flex justify-center">
      <Breadcrumb />
    </div>

    {/* ================= HEADING ================= */}
    <div className="text-center mb-16">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
        Let's Find Your Perfect{" "}
        <span className="bg-gradient-to-r from-[#FF5A5A] to-[#FF3B3B] bg-clip-text text-transparent">
          Luxury Apartment in Gurgaon
        </span>
      </h1>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
        Looking for a luxury apartment in Gurgaon? Our property experts
        can help you explore premium projects, compare options, and
        make the right investment decision.
      </p>

      <div className="w-20 h-1 bg-[#FF5A5A] mx-auto mt-6 rounded-full"></div>
    </div>

    {/* ================= FORM + IMAGE ================= */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* FORM */}
      <div
        className="bg-white border border-[#FF5A5A]/30
        rounded-3xl p-10 shadow-2xl"
      >
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">
          Register Your Interest
        </h2>

        <p className="text-gray-500 mb-8 text-sm">
          Fill in your details and our luxury property consultant
          will contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="text-sm text-gray-600">
              Full Name*
            </label>

            <input
              name="name"
              required
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-xl
              bg-[#FFF5F5]
              border border-[#FF5A5A]/40
              text-gray-900
              focus:ring-2 focus:ring-[#FF5A5A]
              outline-none transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Phone*
            </label>

            <input
              name="phone"
              required
              inputMode="numeric"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-xl
              bg-[#FFF5F5]
              border border-[#FF5A5A]/40
              text-gray-900
              focus:ring-2 focus:ring-[#FF5A5A]
              outline-none transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Message
            </label>

            <textarea
              rows={4}
              name="message"
              placeholder="Tell us about your apartment requirements..."
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-xl
              bg-[#FFF5F5]
              border border-[#FF5A5A]/40
              text-gray-900
              focus:ring-2 focus:ring-[#FF5A5A]
              outline-none resize-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full
            font-semibold
            bg-gradient-to-r
            from-[#FF5A5A]
            to-[#FF3B3B]
            hover:from-[#FF4545]
            hover:to-[#E62E2E]
            text-white
            transition
            shadow-lg
            disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>

        </form>
      </div>

      {/* IMAGE */}
      <div
        className="relative h-[520px]
        rounded-3xl overflow-hidden
        border border-[#FF5A5A]/30
        shadow-2xl"
      >
        <Image
          src="https://images.presentationgo.com/2025/06/business-partnership-handshake.jpg"
          alt="Luxury Apartments Gurgaon"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

    </div>

    {/* MAP */}
    <div
      className="mt-24 rounded-3xl
      overflow-hidden
      border border-[#FF5A5A]/30
      shadow-2xl"
    >
      <iframe
        title="Gurgaon Location"
        src="https://www.google.com/maps?q=Gurgaon,Haryana&z=12&output=embed"
        className="w-full h-[500px] border-0"
        loading="lazy"
      />
    </div>

  </div>
</section>
    </>
  )
}