import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
   title:
  "Residential Projects Blog | New Launches, Property Updates & Investment Insights in Faridabad",

description:
  "Explore the latest blogs on residential projects in Faridabad, new project launches, luxury apartments, builder floors, affordable housing developments, investment opportunities, market trends, and expert home buying advice.",

keywords: [
  "residential projects Faridabad",
  "new residential projects Faridabad",
  "luxury apartments Faridabad",
  "builder floors Faridabad",
  "affordable housing Faridabad",
  "upcoming projects Faridabad",
  "property investment Faridabad",
  "real estate trends Faridabad",
  "home buying guide Faridabad",
  "best residential projects Faridabad",
  "residential property news Faridabad",
  "Nehar Par projects Faridabad",
  "apartments in Faridabad",
  "housing projects Faridabad",
  "real estate blog Faridabad"
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