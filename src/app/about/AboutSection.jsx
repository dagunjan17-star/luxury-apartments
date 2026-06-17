"use client";

import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default function AboutPage() {
   const faqs = [
    { question: "Q1: Who are you and what does this platform do?", answer: "We are a dedicated residential property directory for Faridabad. Our platform lists verified new, under-construction, and ready-to-move residential projects across all major sectors of Faridabad. We help home buyers, investors, and NRIs research properties with accurate pricing, RERA status, builder details, and amenity information — all in one place, completely free of cost." },
    { question: "Q2: Is this platform free to use for home buyers?", answer: "Yes, completely free. Browsing listings, comparing projects, reading neighbourhood guides, and contacting our team costs you nothing. We believe access to reliable property information should never be paywalled. You can explore every listing, filter by budget, sector, or property type, and reach out to our advisors without any subscription or registration fee" },
    { question: "Q3: How do you verify the projects listed on your platform?", answer: "Every project goes through a manual verification process before being listed. We check RERA Haryana registration on the official HRERA portal, review the builder's track record, confirm the approved building plan, verify possession timelines, and cross-check amenity claims. We also update listings regularly to reflect current pricing, availability, and construction progress." },
    { question: "Q4: Are you affiliated with any specific builder or developer?", answer: "No. We operate as an independent property directory and are not exclusively affiliated with any builder or developer. Projects appear on our platform based on their compliance with our quality and RERA standards — not commercial arrangements. This independence allows us to give you unbiased, honest information about every listing." },
    { question: "Q5: How current is the property information on your platform?", answer: "We update listing data on a regular basis — typically every 30 to 60 days, or sooner when there are significant changes such as new launch pricing, revised possession dates, or project completion. If you ever find outdated information, you can flag it directly from the listing page and our team will verify and update it within 48 hours." },
    { question: "Q6: Can I schedule a site visit through your platform?", answer: " Yes. Each project listing includes a site visit booking option. You select your preferred date and time slot, and our property advisor will confirm the appointment within a few hours. The visit is completely free and comes with no obligation to purchase. Our advisors can also accompany you on the visit if you'd like local guidance during the walkthrough." },
    { question: "Q7: Do you list resale properties or only new projects?", answer: "Our primary focus is on new and under-construction residential projects in Faridabad. However, we are expanding our platform to include verified resale listings as well. If you have a resale property to list or are looking for one in a specific sector, please contact our team directly and we will assist you with available options." },
    { question: "Q8: How can a builder get their project listed on your platform?", answer: "Builders can submit their project for listing by reaching out through our Contact page. All submissions are reviewed against our verification criteria — including valid RERA Haryana registration, approved building plans, and accurate project details. Listings that meet our standards are published at no charge for basic visibility. We also offer enhanced listing packages for greater reach." },
    { question: "Q9: Do you offer home loan or legal assistance?", answer: "While we are a property directory and not a financial institution or law firm, we work closely with trusted home loan DSAs and property lawyers in Faridabad. We can connect you with the right professionals for loan eligibility checks, documentation assistance, and title verification. These referrals are made in your interest, and any professional you engage with works independently." },
    { question: "Q10: How can I contact your team for a specific query?", answer: "You can reach us through the Contact Us page on our website, where you'll find a query form, our email address, and our WhatsApp number for quick responses. Our team is available Monday through Saturday, 10 AM to 7 PM. We typically respond to all enquiries within a few business hours and are happy to help with anything from project-specific questions to general Faridabad market advice." },
  ];
  return (
    <section className="bg-red-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-start">
   <Breadcrumb />
  </div>

        {/* ================= HERO ================= */}
        {/* ================= HERO ================= */}
<div className="grid md:grid-cols-2 gap-16 items-center mb-28">

  {/* LEFT */}
  <div>
  <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
  <span className="bg-gradient-to-r from-[#FF5A5A] to-[#FF3B3B] bg-clip-text text-transparent">
    Discover Luxury Apartments in Gurgaon
  </span>
</h1>

<p className="text-gray-600 mt-6 leading-relaxed text-lg max-w-xl">
  Explore Gurgaon’s finest luxury apartments across Golf Course Road,
  Dwarka Expressway, New Gurgaon, and Golf Course Extension Road.
  Compare verified projects, premium amenities, pricing, floor plans,
  and investment opportunities in one place.
</p>

    <div className="mt-8 flex gap-4">
  <Link
    href="/"
    className="px-6 py-3 rounded-full text-sm font-semibold
    bg-gradient-to-r from-[#FF5A5A] to-[#FF3B3B]
    text-white shadow-lg hover:opacity-90 transition"
  >
    Explore Projects
  </Link>

  <Link
    href="/contact"
    className="px-6 py-3 rounded-full text-sm font-semibold
    border border-[#FF5A5A] text-[#FF5A5A]
    hover:bg-red-50 transition"
  >
    Get Expert Consultation
  </Link>
</div>
  </div>

  {/* RIGHT STATS CARD */}
  <div className="bg-white border border-[#FF5A5A]/30 rounded-3xl p-12 shadow-2xl">

  <h3 className="text-4xl font-bold text-[#FF5A5A]">
    500+
  </h3>
  <p className="text-gray-600 mt-2">
    Luxury Apartments Listed
  </p>

  <div className="h-px bg-[#FF5A5A]/30 my-8"></div>

  <h3 className="text-4xl font-bold text-[#FF5A5A]">
    100+
  </h3>
  <p className="text-gray-600 mt-2">
    Premium Projects
  </p>

  <div className="h-px bg-[#FF5A5A]/30 my-8"></div>

  <h3 className="text-4xl font-bold text-[#FF5A5A]">
    5000+
  </h3>
  <p className="text-gray-600 mt-2">
    Homebuyers Assisted
  </p>

</div>
</div>

{/* ================= OUR MISSION ================= */}
<div className="text-center max-w-7xl mx-auto mb-28">
  <h2 className="text-3xl font-bold text-gray-900 mb-12">
    Who We Are and What Drives Us Every Day
  </h2>

  <div className="grid md:grid-cols-2 gap-8 text-left">

    {/* 1 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Who We Are
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We are a Faridabad-based real estate directory platform dedicated entirely
        to residential property listings across the city and its surrounding NCR
        micro-markets.
      </p>
    </div>

    {/* 2 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Founded by Local Experts
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Founded by a team of property professionals, local market researchers,
        and technology enthusiasts, our mission has always been straightforward —
        to create the most complete, honest, and up-to-date guide to residential
        real estate in Faridabad that any buyer, seller, or investor can rely on
        without second-guessing.
      </p>
    </div>

    {/* 3 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Our Mission
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We are a Faridabad-based real estate directory platform dedicated entirely
        to residential property listings across the city and its surrounding NCR
        micro-markets. Founded by a team of property professionals, local market
        researchers, and technology enthusiasts, our mission has always been
        straightforward — to create the most complete, honest, and up-to-date
        guide to residential real estate in Faridabad that any buyer, seller, or
        investor can rely on without second-guessing.
      </p>
    </div>

    {/* 4 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Coverage Across Faridabad
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Our platform lists residential projects across every major sector in
        Faridabad — Sector 14, Sector 15, Sector 21C, Sector 37, Sector 46,
        Sector 88, Sector 89, NIT Faridabad, Ballabhgarh, Tigaon Road, and
        Greater Faridabad among others.
      </p>
    </div>

    {/* 5 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Every Property Type
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We cover all property types — 1BHK, 2BHK, and 3BHK apartments, builder
        floors, independent villas, row houses, and plotted developments —
        across all budget ranges from affordable housing under ₹30 lakhs to
        luxury residences above ₹1.5 crore.
      </p>
    </div>

    {/* 6 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Careful Verification Process
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Every project listed on our platform goes through a careful verification
        process. We check RERA Haryana registration, builder track record, land
        title status, approved building plans, actual possession timelines, and
        amenity accuracy before a project goes live on our website.
      </p>
    </div>

    {/* 7 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Regular Updates
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We update prices and availability regularly — because we know that stale
        data is worse than no data when you're making a decision this
        significant.
      </p>
    </div>

    {/* 8 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black" >
        Education Beyond Listings
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Beyond listings, we are committed to education. The home-buying process
        in India is complex, often opaque, and filled with jargon that can
        overwhelm first-time buyers. That's why we publish in-depth
        neighbourhood guides, step-by-step home-buying checklists, home loan
        eligibility tips, RERA rights explainers, and Faridabad market trend
        reports — all free, all written in plain language.
      </p>
    </div>

    {/* 9 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Independent and Trustworthy
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We work with builders and developers across Faridabad on a non-exclusive
        basis, which means our listings are never influenced by advertising
        relationships. A project appears on our platform because it meets our
        quality and compliance standards — not because of a commercial
        arrangement. This independence is something we protect fiercely, because
        your trust is the only currency that matters to us.
      </p>
    </div>

    {/* 10 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm ">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Our Vision and Commitment
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Our vision is to become the single most reliable destination for
        residential property research in Faridabad — a platform that residents
        recommend to their friends and family with complete confidence. We
        measure our success not in page views, but in the number of families who
        found their home through us.
        <br /><br />
        If you are a home buyer, we are here to help you search, compare, and
        decide. If you are a builder with a RERA-compliant project you'd like
        listed, we welcome you to reach out. And if you simply want honest
        advice about the Faridabad property market, our team of local experts is
        just a message away.
      </p>
    </div>

  </div>
</div>

{/* ================= WHY CHOOSE US ================= */}
<div className="mb-32">

  <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
    Why Choose Us?
  </h2>

  <div className="grid md:grid-cols-3 gap-10">

    <div className="bg-white rounded-2xl p-10 border border-[#FFB200]/30 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Verified Residential Listings
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Browse carefully verified residential properties with accurate pricing,
        floor plans, project details, location insights, and trusted developer
        information.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-10 border border-[#FFB200]/30 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Top Residential Projects
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Explore leading residential projects across Greater Faridabad, Sector
        75–89, Greenfield Colony, Surajkund, Charmwood Village, and other
        prime residential destinations.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-10 border border-[#FFB200]/30 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Expert Property Assistance
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Get professional guidance for project selection, site visits, home
        loans, investment planning, documentation, and complete property
        buying support.
      </p>
    </div>

  </div>
</div>

{/* ================= CTA ================= */}
<div className="bg-gradient-to-r from-[#FF5A5A] to-[#FF3B3B] rounded-3xl p-16 text-center text-white shadow-2xl">

  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Find Your Dream Luxury Apartment in Gurgaon
  </h2>

  <p className="mb-10 max-w-3xl mx-auto leading-relaxed">
    Compare premium residential projects, discover world-class amenities,
    and connect with trusted property experts to make the right investment.
  </p>

  <Link
    href="/"
    className="bg-white text-[#FF5A5A] px-8 py-3 rounded-full font-semibold
    hover:bg-gray-100 transition shadow-md"
  >
    Explore Luxury Apartments
  </Link>

</div>

</div>
   <section className="py-24 bg-red-50">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-10 text-black">
      Luxury Apartment FAQs
    </h2>

    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="bg-white p-6 rounded-2xl border border-[#FF5A5A]/20"
        >
          <summary className="font-semibold cursor-pointer text-black">
            {faq.question}
          </summary>

          <p className="mt-4 text-gray-600">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>
    </section>
  );
}