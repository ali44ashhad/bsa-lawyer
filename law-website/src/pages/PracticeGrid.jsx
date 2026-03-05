import React from 'react';
import { Link } from 'react-router-dom';
import {
  Landmark, Settings, ShieldAlert, Gavel, Zap, Receipt,
  FileText, Briefcase, Handshake, PenTool, Globe, Building2,
  Users, ShoppingCart, Scale, ShieldCheck, Trophy, Leaf, UserCheck
} from 'lucide-react';


const PracticeGrid = () => {
  const practiceAreas = [
    { title: "Banking, Finance, and Insolvency", slug: "banking-finance&insolvency", icon: <Landmark size={32} strokeWidth={1.5} /> },
    { title: "Technology Media and Telecom", slug: "technology-media-and-telecom", icon: <Settings size={32} strokeWidth={1.5} /> },
    { title: "White-Collar Crime and Cyber Security", slug: "white-collar", icon: <ShieldAlert size={32} strokeWidth={1.5} /> },
    { title: "Dispute Resolution", slug: "international-dispute&investigation", icon: <Gavel size={32} strokeWidth={1.5} /> },
    { title: "Energy and Resources", slug: "energy-resources", icon: <Zap size={32} strokeWidth={1.5} /> },
    { title: "Tax Practice", slug: "tax", icon: <Receipt size={32} strokeWidth={1.5} /> },
    { title: "Regulatory and Securities Laws", slug: "regularity", icon: <FileText size={32} strokeWidth={1.5} /> },
    { title: "Private Equity Investment", slug: "private-equity", icon: <Briefcase size={32} strokeWidth={1.5} /> },
    { title: "Mergers, Acquisitions & Joint Ventures", slug: "mergers&acquisitions", icon: <Handshake size={32} strokeWidth={1.5} /> },
    { title: "Intellectual Property Rights", slug: "intellectual-property-rights", icon: <PenTool size={32} strokeWidth={1.5} /> },
    { title: "International Disputes and Investigations", slug: "international-dispute&investigation", icon: <Globe size={32} strokeWidth={1.5} /> },
    { title: "Infrastructure and Real estate", slug: "infrastructure&real-estate", icon: <Building2 size={32} strokeWidth={1.5} /> },
    { title: "Human Resources and employment law", slug: "human-resource-employement-law", icon: <Users size={32} strokeWidth={1.5} /> },
    { title: "Retail and E-Commerce", slug: "retail", icon: <ShoppingCart size={32} strokeWidth={1.5} /> },
    { title: "Competition and Anti-Trust Law", slug: "competition-and-anti-trust-law", icon: <Scale size={32} strokeWidth={1.5} /> },
    { title: "Company Law Advisory & Secretarial services", slug: "company-law-advisory-secretarial", icon: <ShieldCheck size={32} strokeWidth={1.5} /> },
    { title: "Sports & Gaming Law", slug: "sports-gaming-law", icon: <Trophy size={32} strokeWidth={1.5} /> },
    { title: "Environment", slug: "environment", icon: <Leaf size={32} strokeWidth={1.5} /> },
    { title: "High Net-worth Individuals", slug: "high-net-worth", icon: <UserCheck size={32} strokeWidth={1.5} /> }
  ];

  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="relative flex items-center justify-center mb-12">
          <div className="absolute inset-x-0 flex flex-col gap-1 md:gap-1.5 max-w-6xl mx-auto px-4">
            <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
            <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
            <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
            <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
          </div>
          <div className="relative px-6">
            <h1 className="garamond-font text-2xl sm:text-3xl md:text-5xl font-serif italic font-bold text-gray-900">
              Our Practice Area
            </h1>
          </div>
        </div>

        {/* Practice Grid */}
        {/* Added max-w-6xl for standard width and px-4 for mobile breathing room */}
        <div className="max-w-6xl m-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="flex flex-col group transition-all duration-500 border border-gray-900 md:border-t-0 md:border-l-0"
            >
              {/* Top Section: Icon Area */}
              <div className="bg-black py-12 flex justify-center items-center overflow-hidden">
                <div className="relative z-10 text-[#c5a059] transition-transform duration-700 group-hover:scale-110">
                  <div className="bg-[#111111] p-6 border-gray-800">
                    {area.icon}
                  </div>
                </div>
              </div>

              {/* Bottom Section: Text Area */}
              <div className="bg-[#0a0c10] p-10 flex flex-col items-center text-center flex-grow transition-colors duration-500 group-hover:bg-[#0e1116]">
                <h3 className="garamond-font text-[#aa9166] text-2xl italic font-medium leading-snug min-h-[60px] md:min-h-[80px] flex items-center max-w-[280px]">
                  {area.title}
                </h3>

                <div className="mt-8">
                  <Link to={`/practices/${area.slug}`}>
                    <button className="px-8 py-3 border border-[#c5a059]/40 text-[#c5a059] text-[11px] tracking-[0.25em] uppercase font-bold hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059] transition-all duration-500">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeGrid;