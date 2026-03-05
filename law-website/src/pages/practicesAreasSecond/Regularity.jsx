import React from "react";
import { motion } from "framer-motion";
import regularityImage from '../../assets/practicesAreas/regularity.jpg'
 
const Regularity = () => {
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
        Regulatory and Securities Laws
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
        src={regularityImage}
        alt="Regulatory and Securities Laws"
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
      The advent of globalization has opened up various sectors for private players. The recent Government inclination has been to call for voluntary compliance and self-regulation be it media, labour, high-end projects, and even projects of strategic significance. BSA has considerable experience of dealing with the Government and Private sector, and applying the understanding of Government functioning in all related policy matters, many being new to India and others having been revamped by the Government on the demand of the emerging businesses. Our practice includes:
      </p>     

      <ul className="list-disc pl-8 text-gray-600">
      <li>Assisting in promoter related issues specifically in context with the latest judicial pronouncements on the issues having far-reaching consequences for promoters and businesses.</li>
      <li>Assisting in SEBI related regulations pertaining to foreign institutional investors, venture capitalists, firms as well as the individuals, wealth management, mutual funds, and other related primary as well as secondary issues.</li>
      <li>Assisting in Spheres of Direct and Indirect taxation: Helping our clients in GST filling, claiming input credit tax, seeking advance ruling before the competent authority and also resolving the incessant legal issues arising in GST.</li>
 
      </ul>

      <p>
      We have developed an In-House Corporate Government index for the guidance and assistance of our clients in creating value for the shareholders and transparent as well as authentic indoor operational parameters creating goodwill and credibility of the Corporates for the stakeholders including the government.
      </p>
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default Regularity;