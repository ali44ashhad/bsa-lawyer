import React from "react";
import { motion } from "framer-motion";
import energyImage from '../../assets/practicesAreas/energy.jpg'
 
const EnergyAndResources = () => {
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
        Energy and Resources
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
        src={energyImage}
        alt="Energy and Resources"
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
      <p>
      The economies of scale have to deal with the issues having a serious bearing on the consumer as well as the markets arising out of market-behavior of big corporations, reflected in, exclusive dealing agreements, predatory pricing, margin squeezing, price-discrimination, bundling, purported loyalty schemes, squeezing margins, refusal to license IPRs, refusal to supply. By now the competition law has come of age, in developed economies, the issues faced by us lately were arising and dealt with by various jurisdictions almost for a century. The quest for law enforcement can be summed up as fair competition and fair price to the consumers. The Lawyers at BSA have extensively scanned and researched the legal arrangements across various jurisdictions, we have developed in-house strength to render quality advice, guidance, and effective representation and defense for our clients by working on:
      </p>

     
      <h1 className="garamond-font text-2xl lg:text-4xl font-bold text-gray-900">RENDERING SERVICES</h1>

      <ul className="list-disc pl-7">

      <li>Assistance in reviewing tenders.</li>
      <li>Draft, Evaluate and Finalise bidding Contracts.</li>
      <li>Draft, Review and Negotiate various commercial contracts like EPC, O&M, FIDIC, licenses, take-off and supply, land development, operation & maintenance, and other ancillary documentation.</li>
      <li>Draft and negotiate joint venture, shareholder, and equity subscription agreements to special purpose vehicles (SPVs).</li>
      <li>Advise in the setup of Greenfield and Brownfield Projects.</li>
      <li>Advice on regulatory and environmental frameworks during the planning, development, and operational stages of projects.</li>
      <li>Advice on termination of project agreements and the potential liabilities arising thereunder</li>
      <li>Advice on dispute resolution to distressed projects.      </li>
      <li>Policy-related work-analysis of public private partnership frameworks.</li>
      <li>Advice on minimizing risk and maximizing profit.</li>
      </ul>
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default EnergyAndResources;