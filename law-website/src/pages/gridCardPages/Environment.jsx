import React from "react";
import { motion } from "framer-motion";
import environmentImage from '../../assets/home/environment.png'

const Environment = () => {
  return (
    <>
    <div className="w-full">

{/* ================= HERO SECTION ================= */}
{/* <section className="bg-[#222222] py-20 px-4 flex items- center justify-center overflow-hidden">
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
      <h1 className="garamond-font text-[4vw] sm:text-3xl md:text-4xl lg:text-6xl font-serif italic font-bold text-gray-900 whitespace-nowrap text-center leading-tight">
      Environment
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
        src={environmentImage}
        alt="Banking and Finance"
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
      Environmental laws are laws that protect the environment. Environmental law is the collection of laws, regulations, agreements and common law that governs how humans interact with their environment. This includes environmental regulations; laws governing management of natural resources, such as forests, minerals, or fisheries; and related topics such as environmental impact assessments.
      <br/><br />
BSA help clients understand the environment-related regulatory framework and also guide them on issues related to environmental clearances, consents to establish, consents to operate and other authorisations required under the Indian sustainability laws.
      <br/><br />
      
      </p>

      <p>BSA has provides the following services related to environment law:</p>

      <ul className="list-disc pl-7">

       <li>Advise clients on various aspects of environmental law such as electronic waste management, hazardous waste management, plastic waste management, pollution control, water conservation, wildlife protection, resource efficiency</li>
       <li>Due diligence for business transactions.</li>
       <li>brand protection & management;</li>
       <li>Assisting in compliance with State and Central regulations.</li>
       <li>Drafting of contractual Agreements.</li>
       <li>Representing clients before High Courts, Supreme Courts and various Tribunals.   </li>
      </ul>


    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default Environment;