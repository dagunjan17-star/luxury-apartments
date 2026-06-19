import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
   title:
  "Gurgaon Luxury Real Estate Blog | Market Insights & Tips",

description:
  "Read expert insights on luxury apartments in Gurgaon, market trends, investment tips, NRI buying guides & premium project updates. Updated regularly for buyers.",

keywords: [
  "gurgaon luxury real estate blog",
  "luxury apartment market trends gurgaon",
  "gurgaon property investment tips",
  "luxury housing insights gurugram",
  "latest news on luxury apartments in gurgaon",
  "gurgaon luxury property market trends 2025",
  "nri guide to buying luxury apartments in gurgaon",
  "capital appreciation",
  "rental yield",
  "rera updates",
  "golf course road price trends",
  "dwarka expressway infrastructure"
],
    alternates: {
      canonical: "www.luxuryapartmentsingurgaon.com/blog", // 🔥 apna real domain yaha replace karna
    },
  };
}

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFF5F5]">
      <BlogList />
    </div>
  );
};

export default Page;