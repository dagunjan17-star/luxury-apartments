"use client";

import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default function AboutPage() {
   const faqs = [
    { question: "Q1: How is your luxury property directory different from other real estate websites listing Gurgaon properties?", answer: "Our platform is fundamentally different from general real estate portals in both purpose and execution. General portals like MagicBricks, 99acres, and NoBroker are broad-market platforms that list properties across all price points, locations, and quality levels — with luxury properties constituting a small fraction of their total inventory, presented without specialist curation or premium information depth. Our platform is exclusively dedicated to luxury and premium properties in Gurgaon, which means our entire technology infrastructure, listing standards, search architecture, and editorial content are designed specifically for the needs of premium property seekers rather than adapted from a mass-market template. Every listing on our platform meets verified premium standards. Our search filters are calibrated to luxury-relevant parameters. Our editorial content is written for sophisticated buyers making complex decisions. And our audience is concentrated — consisting exclusively of people actively searching for premium properties in Gurugram — making our platform a far more efficient destination for serious luxury buyers and a far higher-quality lead source for luxury sellers and developers than any general portal can offer" },
    { question: "Q2:How do you ensure that properties listed on your platform are genuinely luxury and not misrepresented?", answer: "Maintaining the integrity of our luxury designation is one of our most critical operational responsibilities, and we take it with corresponding seriousness. Before any property is listed on our platform, it undergoes an evaluation against our defined luxury qualification criteria — which encompasses developer credentials, RERA registration status, project location within Gurgaon's premium residential zones, construction specification standards, amenity package quality assessed against our luxury benchmark matrix, and pricing level consistent with the premium segment. Projects that market themselves as luxury through branding but fail to deliver luxury specifications in construction quality, amenity provision, or location are rejected. Developer self-classification is never accepted without independent verification — our team reviews available specification documents, floor plans, site visit reports, and RERA filings before approving any listing. We also monitor published listings continuously and respond to user-reported misrepresentations with investigation and, where substantiated, removal of the listing in question." },
    { question: "Q3: Do you work with private sellers listing resale luxury apartments in Gurgaon, or only developers?", answer: "Our platform actively lists both new developer projects and resale luxury apartments offered by individual private sellers, as both represent important and distinct segments of Gurgaon's premium property market. Many of Gurgaon's most sought-after luxury addresses — particularly in established corridors like DLF Phase 5, Golf Course Road, and Sushant Lok — are available primarily or exclusively through the resale market, as the original project inventory was fully absorbed years ago. Private sellers listing resale luxury apartments on our platform go through a verification process that confirms their ownership of the property through title documentation, validates the property's specifications against our luxury qualification criteria, and ensures that the listing information — including current pricing, possession status, furnishing details, and any encumbrances — is accurate and complete at the time of listing. We require updated verification documents for all active private seller listings and remove listings where ownership verification cannot be maintained, protecting buyers from fraudulent or inaccurate resale listing information." },
    { question: "Q4: Can I schedule a site visit to a luxury property through your platform?", answer: "Our platform is designed to facilitate direct connection between property seekers and the relevant contact for each listing — whether that is the developer's sales team, the seller's appointed agent, or the landlord's property manager for rental listings. Each property listing includes verified contact information and, where available, an integrated enquiry submission through which you can express interest and request a site visit, along with your preferred timing and any specific questions you want addressed before the visit. For new developer projects, site visits are typically managed by the developer's on-site sales team who can provide show flat tours, project presentations, and detailed specification discussions. For resale and rental listings, site visits are coordinated through the seller or landlord's representative. We strongly recommend conducting thorough site visits for every luxury property under serious consideration — no amount of online research substitutes for the firsthand experience of visiting the building, assessing the apartment condition and actual specification quality, evaluating the neighbourhood environment, and observing the building management standards in person." },
    { question: "Q5:How frequently are the luxury property listings on your platform updated?", answer: "Maintaining current, accurate listing information is one of our core operational priorities, and our update frequency reflects the fast-moving nature of Gurgaon's luxury property market. New developer project listings are updated whenever pricing revisions, availability changes, or specification updates are communicated by the developer, which our team processes and publishes typically within 24 to 48 hours of receipt. For resale property listings from private sellers, we conduct mandatory re-verification of listing status at defined intervals and require sellers to confirm ongoing availability at regular touchpoints — with listings automatically flagged for review if seller responsiveness lapses. Rental listings are among our most frequently updated categories given the higher turnover velocity in the luxury rental market, with available status verified actively and listings removed or marked unavailable promptly when properties are let. Users who identify outdated listing information can report it directly through our platform, and our team investigates and resolves all accuracy reports within a defined response time frame." },
    { question: "Q6: Can I schedule a site visit through your platform?", answer: "The rental yield estimates we provide for luxury properties on our platform are based on observed market data rather than theoretical calculations or developer-supplied projections, which are frequently optimistic. Our estimates draw on current and recent rental transaction data for comparable properties in the same building or project where available, rental transaction records from the broader locality and sector, and input from verified luxury property management firms with active rental portfolios in the relevant micro-market. We present rental yield estimates as ranges rather than point estimates to accurately reflect the variability that exists based on furnishing level, floor, view, and specific unit characteristics within any given project. We are transparent about the basis for our yield estimates and flag where data availability is limited or where market conditions are changing sufficiently rapidly that historical yield data may not accurately predict near-term performance. Investment decisions involving luxury real estate should never rely solely on estimated yields — we recommend engaging an independent financial advisor and a specialist real estate professional for high-value investment decisions." },
    { question: "Q7: What recourse do I have if a listed property does not match what was described on your platform?", answer: "We take listing accuracy extremely seriously and have a structured process for addressing cases where a property does not match its description on our platform. If you visit a property and find significant discrepancies between the listing information and the actual property — in terms of specifications, amenity availability, possession status, furnishing level, or any other material representation — we strongly encourage you to report the discrepancy through our platform's listing accuracy report mechanism immediately. Our team investigates all reported discrepancies by contacting the listing party for explanation and, where necessary, conducting independent verification through available documentation. Where discrepancies are confirmed as material misrepresentations, the listing is immediately taken down pending correction, the listing party receives a formal warning, and repeat misrepresentation results in permanent removal from our platform. We document all confirmed misrepresentation cases and use them to refine our listing verification processes to prevent similar issues in future. We also maintain records of flagged listing parties that inform our approach to any future listing applications they may submit." },
    { question: "Q8: Does your platform provide home loan guidance for luxury property purchases in Gurgaon?", answer: "While our primary function is providing comprehensive, verified luxury property listings and market information rather than financial services, we recognise that home loan financing is a relevant consideration even in the luxury segment — with many high-net-worth buyers strategically leveraging home loans for tax efficiency and capital preservation rather than out of financial necessity. Our platform provides informational guidance on the home loan landscape for luxury properties — including information on which leading banks and housing finance companies actively finance high-value luxury properties in Gurgaon, typical loan-to-value ratios available for premium properties, the income documentation and eligibility assessment approach used by lenders for high-income borrowers, and the specific documentation requirements for luxury apartment purchases that are relevant for loan applications. We do not endorse specific lenders or earn referral fees for directing buyers to particular financial institutions. For personalised home loan advice calibrated to your specific financial situation and the specific property you are considering, we recommend engaging directly with multiple lenders and consulting an independent financial advisor." },
    { question: "Q9: How do you protect the privacy of luxury property buyers who use your platform?", answer: "Privacy protection is a matter of particular importance for high-net-worth individuals whose real estate activity, financial capacity, and personal information must be handled with extraordinary discretion. Our platform is built with this reality in mind and applies elevated privacy standards consistent with the expectations of our premium user base. We do not require registration to browse luxury property listings on our platform — you can research properties, compare projects, and access detailed listing information without creating an account or providing any personal details. When users do choose to submit enquiries or contact developers through our platform, the personal information provided is used exclusively for the purpose of facilitating the requested connection and is not shared beyond that specific communication, sold to third parties, or used for unsolicited marketing. We do not maintain or sell mailing lists of luxury property buyers or investors. Our data security infrastructure is maintained to commercial-grade standards with regular security assessments. Users may request complete deletion of any personal data associated with their platform interactions at any time" },
    { question: "Q10: What are your plans for expanding the luxury property information you provide to Gurgaon buyers and investors?", answer: "Our product development roadmap for the near and medium term is driven entirely by our observation of what Gurgaon's luxury property buyers, investors, and sellers actually need — and several significant enhancements are in active development. In the immediate term, we are expanding our virtual tour capabilities to provide immersive 360-degree walkthroughs of listed luxury properties, addressing the specific need of NRI buyers and time-constrained senior professionals who want a meaningful property experience before committing to a physical site visit. We are developing a dedicated luxury market price tracker that provides sector-level and project-level price trend data updated monthly, giving investors a real-time view of how Gurgaon's premium micro-markets are performing. We are also building a luxury property comparison tool that allows users to evaluate up to five properties simultaneously across all key decision parameters on a single screen. For sellers and landlords, we are developing enhanced premium listing packages that include professional photography standards, virtual staging options, and priority placement within relevant search results. Every enhancement we build is in service of our founding commitment — to be the most useful, most trusted, and most comprehensive resource for luxury real estate decisions in Gurgaon." },
  ];
  return (
    <section className="bg-red-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-start">
   <Breadcrumb />
  </div>

        {/* ================= HERO ================= */}
        {/* ================= HERO ================= */}
<div className="grid md:grid-cols-1 gap-16 items-center mb-10">

  {/* LEFT */}
  <div>
  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
  <span className="bg-gradient-to-r from-[#FF5A5A] to-[#FF3B3B] bg-clip-text text-transparent">
   About Our Platform — Gurgaon's Most Trusted Destination for Luxury Property Listings
  </span>
</h1>

<p className="text-gray-600 mt-6 leading-relaxed text-lg">
  The decision to buy, sell, or rent a luxury property in Gurgaon is among the most significant, complex, and high-stakes decisions a person will make in their lifetime. It involves not just substantial financial capital but also profound personal aspirations — the desire for a world-class lifestyle, a prestigious address, a secure long-term investment, and a home that reflects the values and achievements of the individual or family who will live in it. At every stage of this journey, the quality of information available to the buyer, seller, or tenant determines the quality of the outcome. We built this platform because we recognised that Gurgaon's luxury real estate market — despite its scale, sophistication, and immense value — was severely underserved by reliable, comprehensive, and genuinely useful digital resources dedicated exclusively to the premium property segment.
General property portals aggregate millions of listings across all price points, burying premium properties in a sea of irrelevant inventory and providing only surface-level information that falls far short of what a serious luxury property buyer needs. Developer websites present one-sided, marketing-oriented information that often obscures important details about project status, past delivery performance, or real-time pricing. Word-of-mouth referrals remain unreliable and geographically limited. The result was a significant information gap at the very top of Gurgaon's residential market — where the stakes are highest and the need for reliable, comprehensive, and unbiased information is greatest.
This platform was built to close that gap permanently. We are Gurgaon's dedicated luxury property directory — an independent, meticulously curated, and continuously updated resource listing only verified premium residential properties across Gurugram's finest addresses. We serve discerning homebuyers, strategic investors, senior executive tenants, and premium property sellers with equal commitment, providing the depth of information and quality of curation that the luxury real estate segment genuinely demands. Our platform is not just a listing site — it is a trusted research partner for every serious luxury property decision in Gurgaon.

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
  {/* <div className="bg-white border border-[#FF5A5A]/30 rounded-3xl p-12 shadow-2xl">

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

</div> */}
</div>

{/* ================= OUR MISSION ================= */}
<div className="text-center max-w-7xl mx-auto mb-8">
  <h2 className="text-3xl font-bold text-gray-900 mb-12">
    Who We Are and What Drives Us Every Day
  </h2>

  <div className="grid md:grid-cols-2 gap-8 text-left">

    {/* 1 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Our Purpose: Bringing Clarity and Confidence to Gurgaon's Luxury Real Estate Market
      </h3>
      <p className="text-gray-600 leading-relaxed">
        The luxury property market in Gurgaon has historically been characterised by information opacity — where pricing was rarely transparent, project details were buried in developer brochures, and buyers relied on the representations of agents with their own commercial interests. Our platform was built to fundamentally change this dynamic by creating a single, authoritative, and genuinely independent destination for luxury property information in Gurugram. We believe that a buyer investing five, ten, or twenty crore rupees in a Gurgaon luxury apartment deserves the same quality of verified, comprehensive, and contextually rich information that institutional investors receive — not the fragmented, marketing-filtered information that the general market has historically provided. Every design decision on our platform, every data standard we maintain, and every listing we publish is oriented toward this core purpose: giving luxury property seekers in Gurgaon the clarity and confidence they need to make great decisions
      </p>
    </div>

    {/* 2 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Our Curation Standard: Why Not Every Luxury Project Makes It Onto Our Platform
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We apply a rigorous, multi-factor curation standard to every project before it is listed on our directory — and this selectivity is one of the most important things that distinguishes us from generic property portals. A project must demonstrate genuine premium credentials across several dimensions to earn a listing: active and valid RERA registration with HRERA, a developer with a verified delivery track record, construction quality specifications that meet or exceed luxury segment benchmarks, a location within Gurgaon's established or credibly emerging premium residential corridors, and an amenity package that meets genuine luxury standards rather than mid-segment norm. Projects with pending RERA registrations, developers with unresolved buyer disputes or a history of delayed possession, or projects that market themselves as luxury but fail to deliver premium specifications are excluded from our platform regardless of advertising pressure or commercial interest. This curation discipline is the core of our value — it means every project you browse on our platform has earned its place.
      </p>
    </div>

    {/* 3 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Our Audience: Who We Built This Platform For and Why They Trust Us
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Our platform serves a highly specific and sophisticated audience — individuals and families making premium real estate decisions in Gurgaon who demand more than generic information. Our primary users include high-net-worth homebuyers purchasing their primary or secondary luxury residence in Gurgaon, strategic real estate investors building premium portfolios in Gurugram's most appreciating corridors, senior corporate executives and expatriates seeking luxury rental accommodation that matches their professional and lifestyle requirements, NRI buyers evaluating Gurgaon's premium property market for long-term investment or a residential base in India, and property sellers and developers seeking to present their luxury assets to the most qualified and intent-driven audience available online. For each of these user groups, we have made specific platform decisions — including information depth, search filter sophistication, and listing detail standards — that reflect a deep understanding of what sophisticated real estate decision-making actually requires.
      </p>
    </div>

    {/* 4 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
       Our Data Philosophy: Depth, Accuracy, and Honesty Over Marketing Gloss
      </h3>
      <p className="text-gray-600 leading-relaxed">
        In a market where developers spend crores on marketing campaigns that emphasise aspirational lifestyle imagery while burying inconvenient details in fine print, our platform takes a deliberately different stance on data presentation. We are committed to providing deep, accurate, and honest property information — even when that information is less flattering to a developer than their own marketing materials would suggest. This means we present carpet area prominently alongside super built-up area so buyers can accurately assess effective pricing. It means we include builder track record ratings based on independently verified past project performance — not developer self-reporting. It means possession timelines we display are realistic assessments rather than optimistic developer projections. And it means we include information about RERA complaints filed against projects where such records exist. We believe that honest, complete data — even when it complicates the sales narrative — ultimately serves both buyers and the long-term health of Gurgaon's luxury real estate market better than curated positivity.
      </p>
    </div>

    {/* 5 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Our Developer Relationships: Independent but Informed, Never Captured
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We maintain active working relationships with Gurgaon's leading luxury developers and brokerage firms — not because we are commercially dependent on them, but because these relationships give us access to the most current, accurate, and complete project information available. We receive project updates, specification documents, pricing information, and availability data directly from developer sources, which we then independently verify and present through our own quality standards rather than simply republishing developer materials. Critically, our relationships with developers do not influence our listing decisions, our project ratings, or our editorial presentation of information. A developer cannot buy a more favourable rating, a higher search ranking, or a more positive editorial treatment on our platform. Our editorial independence from developer commercial interests is the principle that makes our platform credible to the discerning luxury property buyers who rely on us — and we protect that independence absolutely.
        </p>
    </div>

    {/* 6 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Our Technology Infrastructure: Built for the Complexity of Luxury Property Search
      </h3>
      <p className="text-gray-600 leading-relaxed">
       Luxury property search requires a technology infrastructure significantly more sophisticated than what serves the general residential market, and we have invested accordingly. Our platform features a multi-dimensional search and filter system that allows users to search by micro-location within Gurgaon's premium corridors, by specific amenity configurations including private pool availability and concierge service provision, by possession status and developer rating, by carpet area and configuration, and by investment metrics including estimated rental yield range. Property listings are structured to present information in decision-relevant order — beginning with verified ownership and RERA status, proceeding through specification details and builder credentials, and concluding with market context including price trend data for the relevant sector. Our platform is optimised for the research behaviour of high-value decision makers — people who spend significant time evaluating options carefully, return to the platform multiple times across weeks or months, and benefit enormously from information that allows rigorous comparison across the Gurgaon luxury property universe
      </p>
    </div>

    {/* 7 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Our Editorial Commitment: Real Information, Real Context, Real Value
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Beyond property listings, our platform is committed to publishing genuinely useful editorial content that helps luxury property buyers, sellers, and investors navigate Gurgaon's premium real estate market with greater intelligence. This includes in-depth sector analyses of Gurgaon's key luxury corridors — examining price trends, recent transaction data, infrastructure developments, and future outlook for areas like Golf Course Road, Golf Course Extension Road, and Dwarka Expressway. We publish buyer guides covering luxury apartment due diligence, NRI purchase processes, home loan strategies for high-value properties, and interior design and fit-out considerations for premium homes. We also provide market commentary and investment analysis written by professionals with genuine Gurgaon luxury market expertise — not generic content recycled from national real estate platforms. Every piece of editorial content on our platform is written to the same standard as our listings: factual, specific, independently verified, and genuinely useful to a sophisticated reader making a high-stakes real estate decision.
      </p>
    </div>

    {/* 8 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black" >
        Our Seller and Developer Commitment: A Platform Where Premium Properties Find Premium Buyers
      </h3>
      <p className="text-gray-600 leading-relaxed">
        For luxury property sellers — both individual sellers of resale premium apartments and developers launching or selling inventory in luxury projects — our platform offers something that generic property portals fundamentally cannot: a concentrated audience of qualified, high-intent, high-net-worth buyers actively searching specifically for premium properties in Gurgaon. When a serious luxury buyer visits our platform, they are not browsing casually across all price ranges — they have already made the decision to invest in Gurgaon's premium segment and are now in active research mode. This audience quality difference between our platform and generic portals is substantial, and it translates into more relevant enquiries, more serious site visits, and faster high-value transactions for sellers and developers who list their luxury properties with us. We offer listing services structured for the specific needs of premium property marketing — including high-resolution imagery standards, detailed specification presentation, and placement within relevant luxury corridor search results.
      </p>
    </div>

    {/* 9 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Our Commitment to the Luxury Rental Market in Gurgaon
      </h3>
      <p className="text-gray-600 leading-relaxed">
        The luxury rental segment in Gurgaon is a significant and often underserved market — one that our platform addresses with the same rigour and depth that we bring to the sale segment. Gurgaon's luxury rental demand is driven by a large and growing population of senior corporate professionals, multinational company executives, diplomatically posted individuals, and high-income transient residents who require premium accommodation without the commitment of purchase. Many of these individuals have highly specific and sophisticated requirements — from particular sectors close to their workplace, to building management quality standards, to smart home integration and pet policies — that are extremely difficult to surface through generic rental platforms. Our platform's luxury rental listings are structured with the specific parameters that matter to premium tenants, and our inventory is sourced from verified landlords and premium property management firms who maintain the quality standards that luxury tenants rightly expect. For landlords, we provide access to Gurgaon's most discerning tenant pool.
      </p>
    </div>

    {/* 10 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm ">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Our Long-Term Vision: Setting the Standard for Luxury Real Estate Information in India
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Our ambition extends beyond being Gurgaon's best luxury property directory — though that remains our immediate and non-negotiable commitment. Our longer-term vision is to establish the definitive standard for premium real estate information platforms across India's major luxury residential markets. The principles we have built this platform on — rigorous curation, editorial independence, information depth, data accuracy, and an unwavering user-first orientation — are universally applicable to any market where high-net-worth individuals make complex, high-value real estate decisions in an information environment that has historically served developer interests more faithfully than buyer interests. Gurgaon is the natural starting point because it is India's most dynamic luxury residential market — but the framework we are building here, both technologically and editorially, is designed to scale. We are committed to earning the trust of India's most discerning real estate decision makers — and that commitment begins, every single day, with the quality of every listing and every piece of content we publish on this platform.
      </p>
    </div>

  </div>
</div>

{/* ================= WHY CHOOSE US ================= */}
<div className="mb-10">

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
   <section className="py-10 bg-red-50">
  <div className="max-w-7xl mx-auto px-6">
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