import React from "react";
import { motion } from "framer-motion";
import privateImage from '../../assets/practicesAreas/private.jpg'
 
const PrivateEquity = () => {
  return (
    <>
    <div className="w-full">

{/* ================= HERO SECTION ================= */}
{/* <section className="bg-[#222222] py-20 px-4 flex items-center justify-center overflow-hidden">
  <motion.h1
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}

    className="garamond-fonttext-[6.5vw] sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-center text-[#D4AF37] whitespace-nowrap"
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
        Private Equity Investment
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
        src={privateImage}
        alt="Private Equity Investment"
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
      BSA’s investment team coordinates the fund investment work with the tax team. The idea is to synergize and leverage the coordination while keeping the focus on the repatriation of profits and exits. The specific objective can be achieved by designing structures and documentation with an industry-specific perspective. BSA assists its clients all through the negotiations and documentation, hedging the legal risks, compliance with regulatory regimes, industry-specific issues, fast-changing technology and the prospective regulatory developments triggered by the technological advancements which guide BSA’s legal services.
      </p>
     

      <ul className="list-disc pl-7 text-gray-600">
      <li>
      Private equity investments: BSA assists its clients from the very inception of the transaction through concretization of the issues from the stage of drawing term sheets, examination of management claims, governance specific issues from regulatory perspective, and tax-related implications. Attention is given to factor in all the inter disciplinary aspects to suit client-specific needs throughout the documentation pertaining to share subscription agreements, share purchase agreements, shareholders agreement, indemnity agreements, and the issues related to closure and post-closure compliances with the regulatory authorities.  </li>
  <li>
  Venture capital funds: The fast-growing startup ecosystem, information technology, and the understanding of the e-commerce sector puts us in an enviable position to provide focused legal advice at all stages right from the due diligence and related aspects, profit booking issues and their tax implications, exit related aspects and all the documentation pertaining to venture capital investments.  </li>
  
  <li>
  Exit by private and venture capital funds: The in-depth understanding, experience and cutting-edge knowledge based on our expertise and deep research, renders us utmost suitable to guide our clients in advising on secured and tax-related favorable structures and documentations to maximize and incentives for the private as well as the venture capital funds.  </li>
 
      </ul>
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default PrivateEquity;