"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className="sticky top-0 z-50
        bg-white shadow-sm border-b border-[#FF5A5A]/30 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-[72px]">

            {/* LOGO */}
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              }}
              className="text-xl sm:text-2xl font-bold tracking-wide
              text-[#FF5A5A] hover:text-[#FF3B3B]
              transition duration-300"
            >
              DA
            </Link>

            {/* ================= DESKTOP LINKS ================= */}
            <div className="hidden md:flex items-center gap-8">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="relative text-lg font-medium text-gray-700 transition duration-300 group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF5A5A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* CONTACT BUTTON */}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2 rounded-full text-sm font-semibold
                bg-gradient-to-r from-[#FF5A5A] to-[#FF3B3B]
                hover:from-[#FF4545] hover:to-[#E62E2E]
                text-white shadow-md hover:shadow-lg
                transition duration-300"
              >
                Contact
              </Link>

            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#FF5A5A]"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div
          className="fixed top-[72px] left-0 w-full z-40 md:hidden
          bg-white shadow-xl border-t border-[#FF5A5A]/30"
        >
          <div className="flex flex-col gap-6 p-6">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-700 hover:text-[#FF5A5A] transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 text-center px-6 py-3 rounded-full font-semibold
              bg-gradient-to-r from-[#FF5A5A] to-[#FF3B3B]
              hover:from-[#FF4545] hover:to-[#E62E2E]
              text-white shadow-md transition duration-300"
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;