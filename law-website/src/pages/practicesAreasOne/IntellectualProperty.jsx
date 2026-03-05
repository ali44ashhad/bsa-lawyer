import React from "react";
import { motion } from "framer-motion";
import energyImage from '../../assets/practicesAreas/energy.jpg'
 
const IntellectualProperty = () => {
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
        Intellectual Property Rights
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
      India has adopted an elaborate statutory and enforcement regime. With a robust and responsive judicial framework, it can be termed one of the best in the world. We at BSA have fully supported and led our clients through various stages of IPR adoption, search and identification, securing, and enforcement.      </p>

     
      <h1 className="garamond-font text-2xl lg:text-4xl font-bold text-gray-900">RENDERING SERVICES</h1>

      <ul className="list-disc pl-7">

      <li>Drafting, filing, prosecution and advice successful registration of applications for intellectual property rights.</li>
      <li>Assist in Maintaining IPR for the full term, sending renewal reminders, automatic renewing, and reinstatement of IPR not renewed in time.</li>
      <li>Create strategies for brand management and help to put in place agreements and commercial arrangements.      </li>
      <li>Assist in portfolio management by looking after legal-commercial strategies enabling planning regarding portfolio creation and management.      </li>
      <li>Assist in enforcement of IP through strategic litigation.</li>
      <li>Assist client with Filing opposition, rectification, revocation, and cancellation proceedings.      </li>
      <li>Provide prosecution services for suits of infringement, passing off, and anti-counterfeit action.      </li>
      <li>Create risk mitigation strategies to deal with the immediate situation as well as come up with prevention strategies for the future of the organization.

</li>
      </ul>
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default IntellectualProperty;