import React from "react";
import { motion } from "framer-motion";
import mergersImage from '../../assets/practicesAreas/mergers.jpg'
 
const MergersAcquisitions = () => {
  return (
    <>
    <div className="w-full">

{/* ================= HERO SECTION ================= */}
{/* <section className="bg-[#222222] py-20 px-4 flex items-center justify-center overflow-hidden">
  <motion.h1
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
   
    className="garamond-font text-[6.5vw] sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-center text-[#D4AF37] whitespace-nowrap"
  >
    Bijender Singh Associates LLP
  </motion.h1>
</section> */}

{/* ================= ABOUT CONTENT SECTION ================= */}
<section className="max-w-6xl mx-auto py-12 md:py-16 px-4">
  {/* Heading Section */}
  <div className="relative flex items-center justify-center mb-8 md:mb-12 overflow-hidden">
    {/* Background Lines */}
    <div className="absolute inset-x-0 flex flex-col gap-1 md:gap-1.5 w-full">
      <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
      <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
      <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
      <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
    </div>

    {/* Heading: text-[6vw] ensures it fits on mobile without wrapping, scaling up to text-5xl */}
    <div className="z-10">
      <h1 className="garamond-font text-[5vw] sm:text-4xl md:text-4xl lg:text-6xl font-serif italic font-bold text-gray-900 whitespace-nowrap text-center leading-tight">
        Mergers and Acquisitions
      </h1>
    </div>
  </div>

  <div className="max-w-6xl mx-auto">
    {/* Image Container */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-lg"
    >
      <img
        src={mergersImage}
        alt="Mergers and Acquisitions"
        className="w-full h-auto md:h-auto object-contain"
      />
    </motion.div>

    {/* Text Content */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-8 md:mt-10 space-y-6 text-[14px] md:text-base leading-relaxed text-gray-800 text-justify md:text-left"
    >
      <p className="text-gray-600">
      BSA offers end-to-end M&A services, covering due diligence, negotiations, finalization of transactional documents, post-acquisition integration and transition till final closing in both domestic and cross border transactions.      </p>

     
      <h1 className="garamond-font text-2xl lg:text-4xl font-bold text-gray-900 ">RENDERING SERVICES</h1>

      <ul className="list-disc pl-7 text-gray-600">
      <li>
    Drafting and negotiating term-sheets and definitive agreements including share purchase agreements, non-compete agreements, non-disclosure agreements, escrow agreements, stock-swap agreements and employment agreements.
  </li>
  <li>
    Structuring of Share and Business acquisitions, entry and exit routes for investors, involved in M&A.
  </li>
  <li>
    Carrying out legal due diligence including financing, regulatory approval, valuation, operational issues with an industry specific focus.
  </li>
  <li>
    Advise on publicly traded companies, foreign Direct investment issues and tax considerations involving different jurisdictions in India. Also, followed by filings with the ROC and RBI depending upon the issues mandating the said filings.
  </li>
  <li>
    Seeking approvals of NCLT for mergers and demergers and filings with all the applicable regulatory authorities.
  </li>
      </ul>
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default MergersAcquisitions;