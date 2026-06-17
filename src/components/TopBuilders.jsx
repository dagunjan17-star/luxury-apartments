"use client";

import { useEffect, useState, useRef } from "react";
import { useProject } from "@/contextapi/PropertyContext";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import ContactPopup from "./ContactPopup";
import {
  MapPin,
  Building2,
  IndianRupee,
  Phone,
  ArrowRight,
} from "lucide-react";
export default function ProjectsPage() {

  const {
    paginatedProjects,
    loading,
    error,
    getProjectByCity,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalItems,
  } = useProject();
  useEffect(() => {
    getProjectByCity();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const sectionRef = useRef(null);


 const handlePageChange = (page) => {
 

  getProjectByCity(page);

  sectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  return (
    <section ref={sectionRef}
      className="bg-gradient-to-b from-[#FFF5F5] via-[#FFF9F9] to-white min-h-screen py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        {!loading && (
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-[#1a1405] mb-4">
              <span className="text-[#FF5A5A]">Luxury Apartments</span> in Gurgaon
            </h1>

            <p className="text-lg text-gray-600 max-w-5xl leading-relaxed">
              Discover the finest luxury apartments in Gurgaon’s most prestigious
              locations including Golf Course Road, Golf Course Extension Road,
              Dwarka Expressway, New Gurgaon, Sohna Road, and Southern Peripheral
              Road. Explore premium 2 BHK, 3 BHK, 4 BHK, and penthouse residences
              featuring world-class amenities, modern architecture, landscaped
              gardens, clubhouse facilities, swimming pools, fitness centers,
              dedicated sports facilities, and excellent connectivity to major
              business hubs. Compare verified luxury projects from top developers
              with updated prices, floor plans, RERA details, possession timelines,
              and location advantages—all in one place.
            </p>
          </div>
        )}

        {/* Loader */}
        {loading && (
          <div className="flex items-center justify-center min-h-[30vh]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 border-4 border-[#FF5A5A]/20 border-t-[#FF5A5A] rounded-full animate-spin"></div>
              <p className="text-gray-600 font-medium">
                Loading Luxury Apartments...
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-8">
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">

            {paginatedProjects?.map((item, index) => (
              <div
  key={`${item.slug}-${index}`}
  className="
  bg-white
  rounded-[30px]
  overflow-hidden
  border border-gray-100
  shadow-lg
  hover:shadow-2xl
  hover:-translate-y-2
  transition-all
  duration-300
  group
  flex
  flex-col
"
>
  {/* Image */}
  <div className="relative h-52 overflow-hidden">
    <Image
      src={item.imgurlink || "/placeholder.jpg"}
      alt={item.projectName}
      fill
      className="object-cover group-hover:scale-110 transition duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

    {/* Luxury Badge */}
    <div className="absolute top-4 left-4">
      <span
        className="
        bg-white/95
        backdrop-blur-md
        px-4
        py-2
        rounded-full
        text-sm
        font-bold
        text-[#FF5A5A]
        shadow-lg
      "
      >
        Luxury Project
      </span>
    </div>

    {/* Price Badge */}
    <div className="absolute bottom-4 right-4">
      <div
        className="
        bg-[#FF5A5A]
        text-white
        px-4
        py-2
        rounded-full
        text-sm
        font-bold
        shadow-lg
      "
      >
        ₹ {item.price}
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="p-3 flex flex-col flex-grow">
    {/* Project Name */}
    <h2
      className="
      text-2xl
      font-bold
      text-gray-900
      mb-3
      line-clamp-1
    "
    >
      {item.projectName}
    </h2>

    {/* Builder */}
    <div className="flex items-center gap-2 mb-1">
      <Building2
        size={18}
        className="text-[#FF5A5A] flex-shrink-0"
      />

      <span className="text-gray-700 font-medium">
        {item.builderName}
      </span>
    </div>

    {/* Location */}
    <div className="flex items-start gap-2 mb-2">
      <MapPin
        size={18}
        className="text-[#FF5A5A] mt-1 flex-shrink-0"
      />

      <div>
        <p className="font-semibold text-gray-900">
          {item.address}
        </p>

        <p className="text-sm text-gray-500">
         City: {item.city}, {item.state}
        </p>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-100 my-2" />

    {/* Price Section */}
    <div
  className="
  bg-gradient-to-r
  from-[#FFF5F5]
  to-[#FFE8E8]
  rounded-2xl
  p-4
  mb-5
"
>
  <div className="flex items-center gap-2">
    <span className="text-sm text-gray-500">
      Starting Price
    </span>

    <IndianRupee
      size={20}
      className="text-[#FF5A5A]"
    />

    <h3
      className="
      text-2xl
      font-bold
      text-[#FF5A5A]
      leading-none
    "
    >
      {item.price}
    </h3>
  </div>
</div>

    {/* Buttons */}
    <div className="grid grid-cols-2 gap-3 mt-auto">
      <button
        onClick={() => {
          setSelectedProperty(item.projectName);
          setIsOpen(true);
        }}
        className="
        flex
        items-center
        justify-center
        gap-2
        py-3
        rounded-2xl
        border
        border-[#FF5A5A]
        text-[#FF5A5A]
        font-semibold
        hover:bg-[#FF5A5A]
        hover:text-white
        transition-all
        duration-300
        cursor-pointer
      "
      >
        <Phone size={16} />
        Contact Now
      </button>

     <Link
  href={`https://www.dealacres.com/project/${item.slug}`}
  target="_blank"
  rel="noopener noreferrer"
>
        <button
          className="
          w-full
          flex
          items-center
          justify-center
          gap-2
          py-3
          rounded-2xl
          bg-gradient-to-r
          from-[#FF5A5A]
          to-[#FF3B3B]
          text-white
          font-semibold
          shadow-lg
          hover:shadow-xl
          transition-all
          duration-300
          cursor-pointer
        "
        >
         View Details
          <ArrowRight size={16} />
        </button>
      </Link>
    </div>
  </div>
</div>
            ))}

            {paginatedProjects?.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500 text-lg">
                  No Luxury Apartments Found
                </p>
              </div>
            )}

          </div>
        )}
      </div>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <ContactPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        propertyTitle={selectedProperty}
      />
    </section>
  );
}