import HeroSection from "@/components/Hero";
import PlotSaleFAQSection from "@/components/PlotSaleFAQSection";
import ResidentialProjectsContent from "@/components/ResidentialProjectsContent";
import TopBuilders from "@/components/TopBuilders";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <TopBuilders/>
   <ResidentialProjectsContent/>
   <PlotSaleFAQSection/>
   
   </>
  );
}
