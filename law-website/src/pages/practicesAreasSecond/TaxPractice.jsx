import React from "react";
import { motion } from "framer-motion";
import taxImage from '../../assets/practicesAreas/taximage.png'
 
const TaxPractice = () => {
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
        Tax Practice
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
        src={taxImage}
        alt="Tax Practice"
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
      Globalization has changed the way the countries tax and almost every country is reviewing its regime in respect to the taxing structures of the Multi-National Tech and E-commerce Giants and striking the balance not to impede the free movement of capital and growth. BSA has a totally focused research-oriented Tax Team, working on the existing and potential tax issues pertaining to the business vertices, like Infrastructure, Investment funds, Real estate, Business Process Outsourcing, Media and Technology, Banking, and Insurance. BSA has been providing its expert services to its client in all spheres of Direct and Indirect Taxation:      </p>     

      <ul className="list-disc pl-8 text-gray-600">
      <li>Taxation arising in India, including entry and exit issues</li>
  <li>International joint ventures and collaboration-related tax advisory</li>
  <li>Investment restructuring and globalization of Indian businesses abroad</li>
  <li>Transfer Pricing </li>
  <li>Multilateral and Bilateral Tax Treaties and their impact on the Big Investment and exit decisions.</li>
  <li>We also assist our clients in conducting all proceedings arising before the Tax-authorities or Courts.</li>
  <li>Research-based opinions on tax controversies and structuring strategic tax planning</li>
  <li>Preparing and submitting written briefs before the Tax authorities.</li>
  <li>Representing clients before the Tax Dispute Authorities and the Authority for Advance ruling.</li>
  <li>Representing our clients before High Courts and the Supreme Court of India.</li>
  <li>Helping clients in GST filling, claiming input credit tax, seeking advance ruling before the competent authority and also resolving the neccessant legal issues arising in GST.</li>
 
      </ul>

      
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default TaxPractice;