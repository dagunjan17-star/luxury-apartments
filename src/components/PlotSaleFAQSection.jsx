"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are the best luxury residential areas to buy a premium apartment in Gurgaon?",
    answer: "Gurgaon has several distinct luxury residential corridors, each with a unique character, price range, and lifestyle proposition for premium homebuyers. Golf Course Road — particularly the DLF 5 area encompassing sectors 42, 43, 54, and 55 — remains the most prestigious and established luxury address in Gurugram, featuring iconic projects from DLF, Emaar, and Sobha with robust rental markets and strong capital appreciation history. Golf Course Extension Road across Sectors 65, 66, and 67 has emerged as the preferred destination for newer luxury inventory with contemporary design and strong amenity packages from builders like M3M, Godrej, and Tata. Dwarka Expressway in the Sectors 99 to 115 corridor offers luxury at relatively more competitive price points with significant long-term upside as infrastructure matures. Sohna Road's Southern Peripheral Road zone features several ultra-premium gated communities with villa-style living. For buyers seeking the absolute pinnacle of Gurgaon luxury with maximum lifestyle infrastructure, Golf Course Road and its immediate extensions remain the undisputed first choice.",
  },
  {
    question: "What is the typical price range for luxury apartments in Gurgaon in 2025?",
    answer: "Luxury apartment pricing in Gurgaon spans a wide range depending on the specific micro-market, builder, floor, view, and configuration. In the mid-luxury segment — which includes premium 3 BHK apartments in established sectors — prices typically range from approximately ₹3 crore to ₹7 crore. In the ultra-luxury and super-premium segment — which includes large 4 BHK apartments, sky villas, and penthouses from marquee developers on Golf Course Road and Golf Course Extension Road — prices range from ₹7 crore to ₹30 crore and above, with iconic penthouses in signature projects commanding even higher valuations. Per-square-foot rates in Gurgaon's luxury segment currently range from approximately ₹12,000 per square foot in emerging luxury corridors to ₹25,000 per square foot and beyond in the most prestigious developments on Golf Course Road and DLF 5. Ready-to-move luxury properties command a significant premium over under-construction inventory at comparable specifications. Market conditions continue to evolve — the specific listings on our platform carry current pricing verified at the time of listing.",
  },
  {
    question: "What amenities should I expect in a luxury apartment in Gurgaon?",
    answer: "Luxury residential projects in Gurgaon have set exceptionally high benchmarks for amenity provision, and premium buyers rightly hold developers to these standards. A genuine luxury apartment project in Gurgaon should include a minimum of a grand entrance lobby with concierge services, a world-class clubhouse spanning at least 30,000 to 50,000 square feet in larger developments, multiple swimming pools including both indoor and outdoor options, fully equipped gymnasium and wellness spa, multi-cuisine restaurant and sky lounge or rooftop terrace, dedicated sports facilities including tennis courts, squash courts, and multipurpose sports arenas, children's play areas with premium equipment, business centre and co-working facilities, high-speed elevator banks with minimal wait times, 24/7 multi-tier security with CCTV surveillance and electronic access control, multi-level basement parking, and landscaped gardens with jogging tracks. In ultra-premium projects, additional features include private sky gardens, golf simulators, private cinema rooms, smart home automation integrated into each apartment, EV charging infrastructure, and dedicated concierge services for daily lifestyle requirements.",
  },
  {
    question: "How do I verify if a luxury apartment project in Gurgaon is RERA registered?",
    answer: "Verifying RERA registration is the single most important due diligence step before booking any luxury apartment in Gurgaon, regardless of the developer's reputation or the project's prestige. Every legitimate residential project in Haryana selling units to buyers is legally required to obtain RERA registration from HRERA — the Haryana Real Estate Regulatory Authority — before inviting bookings or collecting advances. You can verify any project's RERA status by visiting the official HRERA website and searching by project name, developer name, or RERA registration number. The HRERA portal displays not just registration status but also project details, approved plans, construction timelines, financial information, and any complaints that have been filed against the developer. Our platform displays the RERA registration number for every listed luxury project, making it straightforward to cross-verify. We strongly recommend this cross-verification step for every project before you sign any booking form or pay any advance, irrespective of how established the developer may be.",
  },
  {
    question: "What documents are required to purchase a luxury apartment in Gurgaon?",
    answer: "Purchasing a luxury apartment in Gurgaon requires meticulous documentation management from both the buyer and the seller or developer side. If purchasing from a developer, key documents to collect and verify include the project's RERA registration certificate, the approved building plan from DTCP (Directorate of Town and Country Planning, Haryana), the developer's land title documents confirming clear ownership, the environmental clearance, the fire NOC, the allotment letter issued after booking, the Builder-Buyer Agreement which governs the entire transaction and must be reviewed by a property lawyer before signing, demand letters and payment receipts for all payments made, and the possession certificate and completion certificate at the time of handover. From the buyer's side, you will need your PAN card and Aadhaar card for KYC, passport-size photographs, proof of residence, bank statements for source of funds documentation, and home loan sanction letter if financing through a bank. For NRI buyers, additional documents include OCI card or PIO card, overseas address proof, and a notarised power of attorney if transacting through a representative in India.",
  },
  {
    question: "Is buying a luxury apartment in Gurgaon a good investment in 2025?",
    answer: "Gurgaon's luxury real estate market has demonstrated consistently strong investment fundamentals over the past several years, and 2025 presents a compelling case for premium property investment in Gurugram for several key reasons. First, supply of genuinely premium inventory in established luxury corridors like Golf Course Road remains constrained relative to strong demand from Gurgaon's expanding high-net-worth population and corporate ecosystem, creating a structural supply-demand imbalance that supports price appreciation. Second, luxury rental yields in Gurgaon — particularly in sectors close to major corporate hubs — typically range between two and a half to four percent per annum, which combined with capital appreciation creates a total return profile competitive with many other asset classes. Third, the completion and operationalisation of Dwarka Expressway, ongoing metro expansion, and planned infrastructure upgrades in key luxury sectors are expected to further strengthen Gurgaon's premium residential market. As with any significant investment, individual project selection, developer credibility, and entry timing remain critical — and the listings on our platform include the contextual market data to inform these decisions effectively.",
  },
  {
    question: "What is the process for renting a luxury apartment in Gurgaon?",
    answer: "Renting a luxury apartment in Gurgaon involves a structured process that differs from the standard residential rental experience in several important ways. The process typically begins with defining your requirements precisely — including preferred sector or locality, configuration, furnishing level, budget range including maintenance charges, move-in timeline, and specific amenity or building requirements such as pet-friendliness or visitor parking availability. Browse our platform's rental listings to shortlist properties that match your criteria, then schedule physical site visits to assess the property's actual condition, quality of furnishing, building maintenance standards, and security infrastructure. Once you identify a suitable property, negotiate rental terms including monthly rent, security deposit quantum (typically three to six months' rent for luxury properties), maintenance charge responsibility, annual rent escalation clause, and lock-in period. Insist on a professionally drafted Leave and Licence Agreement prepared by a property lawyer that clearly captures all agreed terms, as verbal agreements carry no legal weight. Verify the landlord's ownership documents before signing and making payment.",
  },
  {
    question: "Which luxury apartment projects in Gurgaon offer the best rental yields?",
    answer: "Rental yield performance for luxury apartments in Gurgaon varies significantly by locality, project, configuration, and furnishing level. Properties located in close proximity to major corporate employment hubs consistently deliver the strongest rental yields — making sectors near Golf Course Road, DLF Cyber City, Udyog Vihar, and NH-48 particularly attractive for investment-oriented luxury buyers. Within the luxury segment, fully furnished or semi-furnished 3 BHK and 4 BHK apartments in premium complexes with strong amenity packages and reputable building management tend to command the highest per-unit monthly rentals, typically ranging from ₹75,000 to ₹3,00,000 per month depending on the project and sector. Penthouses and sky villas, while commanding the highest absolute rentals, often have a more limited tenant pool and longer vacancy periods between tenancies. Investors targeting rental income should prioritise mid-luxury 3 BHK configurations in proximity to corporate corridors for the optimal balance of rental quantum, occupancy rate, and long-term yield sustainability. Our platform includes rental yield estimates for key projects based on current observed rental transactions.",
  },
  {
    question: "Can NRIs buy luxury properties in Gurgaon and what are the rules?",
    answer: "Non-Resident Indians and Persons of Indian Origin are legally permitted to purchase residential properties — including luxury apartments and villas — in Gurgaon without requiring any special approval from the Reserve Bank of India, under the general permission granted under FEMA (Foreign Exchange Management Act). NRIs can purchase residential property using funds remitted from abroad through normal banking channels, from funds held in NRE or NRO accounts in India, or through home loans from Indian banks subject to eligibility criteria. The property is registered in the NRI's name with all the standard documentation processes applicable to resident buyers, plus the additional requirement of submitting the OCI or PIO card and overseas address proof. NRIs can also repatriate the sale proceeds of property purchased using foreign remittances, subject to applicable conditions and a maximum of two residential properties. For luxury apartments purchased using NRO account funds, repatriation is permitted up to one million USD per financial year after tax deductions. Our platform's listings include developer experience ratings for NRI transactions, helping international buyers identify developers with established international buyer management processes.",
  },
  {
    question: "What should I look for when comparing two luxury apartment projects in Gurgaon?",
    answer: "Comparing luxury apartment projects in Gurgaon requires evaluating multiple dimensions simultaneously rather than simply comparing price per square foot. Begin with the developer's track record — specifically their history of on-time possession, construction quality consistency, post-possession maintenance standards, and resolution of buyer complaints. Next, evaluate the location within Gurgaon's luxury hierarchy — proximity to employment hubs, quality of existing social infrastructure, upcoming infrastructure developments, and the overall neighbourhood trajectory. Assess the apartment's carpet area efficiency relative to the super built-up area, as this ratio directly determines the effective price you are paying for usable living space. Compare amenity quality not just in terms of quantity but in terms of operational management — a project with fifty amenities managed poorly is inferior to one with twenty amenities maintained exceptionally well. Evaluate construction quality indicators including specifications for lobby and common area finishing, apartment flooring and fixture brands, window glazing quality, and air conditioning systems. Finally, assess the building management model — self-managed resident welfare associations tend to deliver more accountable day-to-day maintenance than developer-managed systems in the long run. Our platform structures each listing to surface all these comparative data points side by side.",
  },
];

export default function PlotSaleFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="w-full py-6 px-4 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="mb-10 md:mb-14">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
        Luxury Apartments in Gurgaon - FAQs
      </h2>

      <p className="text-gray-600 text-base md:text-lg max-w-3xl mt-4 md:mt-5 leading-7 md:leading-8">
        Get answers to the most frequently asked questions about luxury
        apartments in Gurgaon, including pricing, locations, amenities,
        RERA approval, investment opportunities, possession timelines,
        home loans, and premium residential communities.
      </p>
    </div>

    {/* FAQ */}
    <div className="space-y-4 md:space-y-2">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-2xl md:rounded-3xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-[#FF5A5A] shadow-2xl shadow-red-100"
                : "border-gray-200 hover:border-red-300"
            }`}
          >
            <button
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
              className="w-full flex items-start justify-between gap-3 md:gap-6 px-4 md:px-8 py-5 md:py-7 text-left bg-white"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-7 md:leading-8 pr-2">
                {faq.question}
              </h3>

              <div
                className={`flex-shrink-0 w-10 h-10 md:min-w-[48px] md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? "bg-[#FF5A5A] text-white rotate-180"
                    : "bg-red-100 text-[#FF5A5A]"
                }`}
              >
                <ChevronDown size={20} />
              </div>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 md:px-8 pb-6 md:pb-8">
                  <div className="h-px bg-red-100 mb-5 md:mb-6"></div>

                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 md:leading-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>

          </div>
        );
      })}
    </div>

  </div>
</section>
    </>
  );
}