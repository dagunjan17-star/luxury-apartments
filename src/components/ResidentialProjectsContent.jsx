"use client";

export default function ResidentialProjectsContent() {
  const sections = [
    {
      title:
        "1. Exclusively Curated Luxury Property Listings Across Gurgaon's Finest Addresses",
      content: `Unlike generic real estate portals that mix budget housing with premium inventory, our platform is dedicated exclusively to luxury and ultra-luxury residential properties in Gurgaon. Every listing on our directory meets a defined premium standard — whether that is a minimum threshold of high-end amenities, a prestigious builder pedigree, or a location within Gurgaon's most sought-after residential corridors. This focused curation means that when you browse our platform, every property you see is genuinely premium — no filler listings, no budget compromises, no irrelevant inventory to wade through. For serious luxury homebuyers and investors in Gurgaon, this exclusivity saves enormous time and ensures that every property you consider is actually worthy of your attention and your investment.`,
    },
    {
      title:
        "2. Comprehensive Property Details Including RERA Registration, Carpet Area, and Builder Credentials",
      content: `Buying a luxury apartment in Gurgaon is a multi-crore financial decision that demands complete information at every stage. Our platform provides property listings that go well beyond basic bedroom count and asking price. Each listing includes RERA registration number for the project, verified carpet area and super built-up area breakdown so you understand exactly what you are paying for, builder or developer background with their track record of completed projects, floor plan options, amenity specifications — including clubhouse, concierge, rooftop facilities, smart home features, and security systems — and current pricing per square foot benchmarked against comparable properties in the same corridor. This depth of information empowers luxury property buyers in Gurgaon to make decisions based on complete facts rather than marketing brochures and developer claims.`,
    },
    {
      title:
        "3. Premium Rental Listings for Executive and Corporate Tenants Across Gurgaon",
      content: `Gurgaon's luxury rental market is thriving — driven by senior corporate executives, multinational company employees, diplomats, and affluent individuals who prefer the flexibility of premium rentals over immediate property ownership. Our directory maintains an active, regularly updated inventory of luxury apartments, furnished penthouses, and premium villa rentals across Gurgaon's key corporate corridors and upscale residential zones. Whether you require a fully furnished 3 BHK in a high-security complex near Golf Course Road, a service apartment in Sector 29, or a luxury independent floor in DLF Phase 1, our platform has curated options that match executive lifestyle requirements. Each rental listing specifies furnishing level, available date, monthly rent, maintenance charges, security deposit terms, and pet and guest policies — giving you complete clarity before the first site visit.`,
    },
    {
      title:
        "4. Verified Luxury Property Listings from Gurgaon's Most Trusted Developers",
      content: `Our platform partners with and lists properties exclusively from developers with verified credentials and demonstrated delivery track records in Gurgaon's luxury segment. Premium developers whose projects are featured on our directory include the names synonymous with luxury in Gurugram — from DLF's ultra-premium offerings and Emaar's gated communities to M3M's iconic high-rises, Sobha's precision-engineered residences, Godrej Properties' signature developments, and Signature Global's premium portfolio. Every project listing is cross-verified against HRERA (Haryana Real Estate Regulatory Authority) records before going live on our platform. We do not list projects from developers with a history of delayed possession, unresolved buyer disputes, or lapsed RERA registrations — protecting your capital from the outset of your luxury property search in Gurgaon.`,
    },
    {
      title:
        "5. Advanced Search Filters Designed for the Luxury Property Buyer's Specific Needs",
      content: `Luxury property search in Gurgaon requires a level of filtering sophistication that generic portals simply do not offer. Our platform is built with the premium buyer in mind — featuring advanced search parameters that include not just location and bedroom count, but floor preference and view orientation, specific amenity requirements such as private pool, golf course facing, concierge services or sky terrace, possession status including ready-to-move versus under-construction timelines, pet-friendly designation, smart home integration availability, and parking specifications including covered multi-car basement options. You can also filter by price per square foot to identify value opportunities within the luxury segment, and by builder reputation score to prioritise projects from developers with consistently strong delivery and quality track records in Gurgaon's premium real estate market.`,
    },
    {
      title:
        "6. Investment-Grade Luxury Property Analysis for High-Net-Worth Buyers and Investors",
      content: `Gurgaon's luxury real estate market is not just about prestige — it is one of the most compelling investment opportunities in India's residential property landscape. Premium properties on Golf Course Road, Golf Course Extension Road, and DLF 5 have consistently demonstrated strong capital appreciation alongside attractive rental yields — outperforming mid-segment housing across comparable time periods. Our platform provides buyers and investors with contextual market intelligence alongside individual listings — including price trend data for key luxury corridors, rental yield estimates based on current market rentals in the same building or complex, comparison of under-construction versus ready property value dynamics in premium Gurgaon sectors, and insight into upcoming infrastructure developments that are likely to positively impact specific luxury micro-markets. This investment perspective transforms our directory from a simple listing site into a strategic resource for high-net-worth real estate decisions.`,
    },
    {
      title:
        "7. Luxury Property Listings for NRI Buyers Seeking Premium Gurgaon Investments",
      content: `Non-Resident Indians represent one of the most active buyer segments in Gurgaon's luxury property market, drawn by the combination of strong rupee depreciation benefits, impressive capital appreciation, aspirational lifestyle value, and the desire to maintain a premium base in India. Our platform is specifically designed to serve NRI property buyers with features that address their unique requirements — including detailed virtual tour availability, comprehensive legal documentation checklists for NRI property purchase in Haryana, FEMA compliance guidance, repatriation of funds considerations, and power of attorney requirements for completing transactions from abroad. Each luxury property listing clearly specifies NRI eligibility status and developer experience in handling international transactions, ensuring that NRI buyers can navigate Gurgaon's luxury real estate market with confidence, clarity, and legal compliance from wherever in the world they are located.`,
    },
    {
      title:
        "8. Regularly Refreshed Inventory Reflecting Gurgaon's Dynamic Luxury Property Market",
      content: `The luxury real estate market in Gurgaon moves with remarkable speed — new projects launch, pre-launch opportunities open and close, resale inventory appears and disappears, and rental availability changes week to week. Our platform maintains one of the most frequently updated luxury property databases in Gurugram, ensuring that the listings you browse reflect current availability rather than stale inventory that has already been sold or rented. Our team works directly with premium developers, luxury brokerage firms, and private sellers to source inventory the moment it becomes available — including exclusive pre-launch opportunities and off-market properties that never appear on generic portals. When you use our platform to search for luxury apartments or premium properties in Gurgaon, you are browsing the most current, relevant, and comprehensive luxury inventory available anywhere online.`,
    },
  ];

  return (
    <section className="w-full bg-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[36px] border border-[#FF5A5A]/10 bg-gradient-to-br from-red-50 via-white to-rose-50 p-8 md:p-14 shadow-[0_20px_60px_rgba(255,90,90,0.08)]">

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Why Choose Our Luxury Property Directory
            <span className="text-[#FF5A5A]">
              {" "}for Gurgaon Real Estate?
            </span>
          </h2>

          <div className="mt-12 relative">
  <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF5A5A] to-transparent hidden md:block" />

  <div className="space-y-8">
    {sections.map((item, index) => (
      <div
        key={index}
        className="group relative bg-white rounded-[32px] border border-gray-100 p-8 md:p-10
        hover:border-[#FF5A5A]/30 hover:shadow-2xl transition-all duration-500"
      >
        {/* Number */}
        <div className="absolute -left-3 md:-left-5 top-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF5A5A] to-rose-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
            {index + 1}
          </div>
        </div>

        <div className="pl-6 md:pl-10">
          <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 group-hover:text-[#FF5A5A] transition">
            {item.title.replace(/^\d+\.\s*/, "")}
          </h3>

          <p className="text-gray-600 leading-8 text-base md:text-lg">
            {item.content}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
}