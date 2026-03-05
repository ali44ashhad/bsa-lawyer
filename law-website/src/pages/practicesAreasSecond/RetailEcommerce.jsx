import React from "react";
import { motion } from "framer-motion";
import retailImage from '../../assets/practicesAreas/retail.jpg'
 
const RetailEcommerce = () => {
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
      <h1 className="garamond-font text-[5vw] sm:text-4xl md:text-4xl lg:text-5xl font-serif italic font-bold text-gray-900 whitespace-nowrap text-center leading-tight">
        Retail and E-Commerce
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
        src={retailImage}
        alt="Retail and E-Commerce"
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
      India has the biggest consumer base, the introduction of tech-based solutions for logistics and warehousing has rendered it the most preferred destination for big retail players and the e-commerce giants. The Policy issues in this regard are being worked out in a manner that the stakeholders including the customers have a fair share of competition and advantage of competitive environment in this space and the mass production and manufacturing gets the boost out of burgeoning consumer demand. In recent years, e-commerce and retail growth have surprised even the most enthusiastic and positive predictions. BSA’s multi-disciplinary expertise and experience have been of tremendous help in approaching the complex issues including Taxation. BSA has been an active player in promoting e-commerce at the micro-level and brought in tech-based solutions to the issues hitherto hampered for want of logistics. BSA has been providing to its client’s multifarious services as:      </p>
     

      <ul className="list-disc pl-7 text-gray-600">
      <li>Assistance in setting up wholesale distribution chain all across the country.</li>
      <li>Alignment of business models with the regulatory and environmental regimes.</li>
      <li>Drafting and reviewing distribution, franchisee and supply agreements for single and multi-brand retail.</li>
      <li>Appraisal and assistance in coordinating with the regulatory and legal authorities in India.</li>
      <li>Advice and guidance to India entry and exit plans in accordance with the regulatory mechanisms, aligning and resolving the policy issues including policy specific compliances.</li>
      <li>Drafting and negotiating commercial contracts, listing agreements, vendor agreements, contra-cogs agreements, KYC and warranty issues, brand licensing, promotions, and sponsorship agreements.</li>
      <li>Drafting, scrutinizing and analyzing liability clauses, intermediary liability and safe-harbor, online payment related issues, data privacy, data storage and movement, e-contracts.</li>
 
      </ul>
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default RetailEcommerce;