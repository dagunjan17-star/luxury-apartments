import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { BlogProvider } from "@/contextapi/BlogContext";
import { ProjectProvider } from "@/contextapi/PropertyContext";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Luxury Apartments in Gurgaon: Buy, Sell & Rent Homes",

  description:
    "Explore verified luxury apartments in Gurgaon for sale and rent. Compare premium projects on Golf Course Road, Dwarka Expressway & more. Get expert advice.",
keywords: [
  "luxury apartments in gurgaon",
  "luxury flats gurgaon",
  "premium apartments gurugram",
  "luxury property gurgaon",
  "luxury homes gurgaon",
  "luxury penthouses gurgaon",
  "luxury apartments for sale in gurgaon",
  "luxury apartments for rent in gurgaon",
  "4 bhk luxury apartments golf course road",
  "best luxury apartments in gurugram 2025",
  "premium residential projects",
  "gated community gurgaon",
  "rera registered apartments",
  "ultra-luxury villas",
  "builder floors gurgaon",
  "clubhouse amenities"
],

  alternates: {
    canonical: "https://www.luxuryapartmentsingurgaon.com/",
  },

  openGraph: {
    title:
      "Luxury Apartments in Gurgaon | Premium & Luxury Flats for Sale",
    description:
      "Find premium luxury apartments, penthouses, and high-end residential properties in Gurgaon’s most sought-after locations.",
    url: "https://www.luxuryapartmentsingurgaon.com/",
    siteName: "Luxury Apartments in Gurgaon",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Luxury Apartments in Gurgaon | Premium & Luxury Flats for Sale",
    description:
      "Browse premium luxury apartments and high-end residential properties in Gurgaon.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ProjectProvider>
        <BlogProvider>
        <Navbar/>
        {children}
        <Footer/>
        </BlogProvider>
        </ProjectProvider>
        </body>
    </html>
  );
}
