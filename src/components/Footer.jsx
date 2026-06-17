"use client";

import { useState } from "react";
import Link from "next/link";

import { locations } from "../data/locations";

const createSlug = (location) => {
  return location
    .replace(", Faridabad", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {
  const [showAll, setShowAll] = useState(false);
const [showDisclaimer, setShowDisclaimer] = useState(false);
  const initialCount = 30;
  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (
    <footer className="bg-gradient-to-br from-[#1a1405] via-[#2b1f08] to-[#140d03] pt-16 pb-8 px-4 border-t border-[#FFB200]/30 overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">

       {/* BRAND */}
<div className="mb-10">
  <h2 className="text-2xl font-bold text-white">
    Luxury Apartments in{" "}
    <span className="bg-gradient-to-r from-[#FF5A5A] to-[#FF3B3B] bg-clip-text text-transparent">
      Gurgaon
    </span>
  </h2>

  <p className="text-gray-400 mt-4 max-w-5xl leading-relaxed">
    Discover premium luxury apartments in Gurgaon featuring world-class
    amenities, modern architecture, premium clubhouses, landscaped greens,
    and excellent connectivity. Explore verified residential projects across
    Golf Course Road, Golf Course Extension Road, Dwarka Expressway, New
    Gurgaon, and other prime locations with strong investment potential.
  </p>
</div>

{/* LOCATIONS */}
<div className="mb-10 overflow-visible">
  <h3 className="text-lg font-semibold text-white mb-6">
    Popular Gurgaon Locations
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-4 text-sm overflow-visible">

    {visibleLocations.map((loc, index) => (
      <div key={index} className="relative group overflow-visible">

        <Link
          href={`https://www.dealacres.com/properties/luxury-apartment-for-sale-in-${createSlug(
            loc
          )}-gurgaon`}
          target="_blank"
          rel="noopener noreferrer"
          className="block truncate text-gray-400 hover:text-[#FF5A5A] transition duration-300"
        >
          Luxury Apartments in {loc}
        </Link>

        <div
          className="
          absolute left-1/2 -translate-x-1/2 bottom-full mb-2
          opacity-0 scale-95
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-200
          whitespace-nowrap
          bg-[#451818] text-white text-xs
          px-3 py-1.5 rounded-md
          shadow-lg border border-[#FF5A5A]/40
          z-[9999]
          pointer-events-none
        "
        >
          Luxury Apartments in {loc}
        </div>

      </div>
    ))}

    {!showAll && locations.length > initialCount && (
      <div>
        <span
          onClick={() => setShowAll(true)}
          className="block cursor-pointer text-[#FF5A5A] hover:underline transition"
        >
          View More...
        </span>
      </div>
    )}

    {showAll && locations.length > initialCount && (
      <div>
        <span
          onClick={() => setShowAll(false)}
          className="block cursor-pointer text-[#FF5A5A] hover:underline transition"
        >
          View Less...
        </span>
      </div>
    )}
  </div>
</div>

{/* DISCLAIMER */}
<div className="mt-12 mb-8 bg-[#451818]/60 border border-[#FF5A5A]/20 rounded-2xl p-6">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div>
      <h3 className="text-[#FF5A5A] font-semibold text-lg">
        Disclaimer
      </h3>

      <p className="text-sm text-gray-400 mt-2">
        Property information, pricing, availability, specifications,
        and project details are subject to change. Please verify all
        information independently before making any purchase decision.
      </p>
    </div>

    <button
      onClick={() => setShowDisclaimer(!showDisclaimer)}
      className="px-5 py-2 rounded-lg bg-[#FF5A5A] text-white font-medium hover:bg-[#FF4545] transition"
    >
      {showDisclaimer ? "Show Less" : "Learn More"}
    </button>
  </div>

  {showDisclaimer && (
    <div className="mt-6 border-t border-[#FF5A5A]/20 pt-6 animate-in fade-in duration-300">
      <p className="text-sm text-gray-400 leading-7">
        The information provided on LuxuryApartmentsInGurgaon.com is
        intended for general informational purposes only. While we strive
        to ensure that all property details, pricing, project
        specifications, availability, amenities, and possession timelines
        are accurate and up to date, we do not guarantee the completeness,
        reliability, or accuracy of any information displayed on this
        website.
      </p>
    </div>
  )}
</div>

{/* BOTTOM NAVIGATION */}
<div className="border-t border-[#FF5A5A]/30 pt-6 mt-10 mb-6">
  <div className="flex justify-center items-center">
    <div className="flex flex-wrap gap-6 justify-center text-sm">

      <Link
        href="/about"
        className="text-gray-400 hover:text-[#FF5A5A] transition"
      >
        About
      </Link>

      <Link
        href="/blog"
        className="text-gray-400 hover:text-[#FF5A5A] transition"
      >
        Blog
      </Link>

      <Link
        href="/contact"
        className="text-gray-400 hover:text-[#FF5A5A] transition"
      >
        Contact
      </Link>

      <Link
        href="/how-it-works"
        className="text-gray-400 hover:text-[#FF5A5A] transition"
      >
        How It's Work
      </Link>

    </div>
  </div>
</div>

{/* BOTTOM */}
<div className="border-t border-[#FF5A5A]/30 pt-6 flex flex-col md:flex-row items-center justify-between">

  <p className="text-sm text-gray-500 text-center md:text-left">
    © {new Date().getFullYear()} LuxuryApartmentsInGurgaon.com
  </p>

  <p className="text-sm text-gray-500 mt-3 md:mt-0">
    Designed By -{" "}
    <Link
      href="https://www.parcharmanch.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition cursor-pointer underline-offset-4 hover:underline"
    >
      Parchar Manch
    </Link>
  </p>

</div>

      </div>
    </footer>
  );
}