import React from "react";
import { motion } from "framer-motion";
import technologyImage from '../../assets/practicesAreas/technology.jpg'
 
const TechnologyMedia = () => {
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
        Technology Media and Telecom
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
        src={technologyImage}
        alt="Technology Media and Telecom"
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
      BSA has developed its own identity in various spheres of advisory services in digital advertising, Machine Learning, Artificial intelligence, in areas of medical applications, video streaming and various other fields which are now experiencing continuous development. We possess not only an in-depth understanding of the technology, but an approach that considers the interface with other disciplines, also gives us the edge in resolutions. BSA being a research-based law firm has been devoting considerable time, energy, resources, and intellect, to visualize the possible scenarios and the legal consequences of the latest technology developments to advise our clients.
      </p>
      <ul className="list-disc pl-8 text-gray-600">
      <li>Our services include an examination and advice of latest developments in data protection and privacy.</li>
  <li>Advising on tax-related implications of technological development, acquisition, transfer, and usage at a micro and macro level.  </li>
  <li>Investment restructuring and globalization of Indian businesses abroad</li>
  <li>Legal advice on all aspects of TMT including the regulatory issues, mandated for the domestic and international regimes, including the digital infrastructure.</li>
  <li>We leverage our legal expertise and subject knowledge in litigation for our TMT clients.  </li>
  <li>All intellectual property related issues involved in development of technology , the products and their legal implications.
</li>
 
      </ul>

      
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default TechnologyMedia;