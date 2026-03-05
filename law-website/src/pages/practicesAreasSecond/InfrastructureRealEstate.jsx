import React from "react";
import { motion } from "framer-motion";
import infrastructureImage from '../../assets/practicesAreas/infrastructure.jpg'

const InfrastructureRealEstate = () => {
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
        Infrastructure and Real Estate
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
        src={infrastructureImage}
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
      For more than a decade in India, the Government has made huge investments in infrastructure, which has, in turn, transformed the real estate sector. The burgeoning population and its gravitation toward the cities offer a unique and unbounded opportunity to the global as well as the Indian capital. Having worked for various Infrastructure as well as the real estate verticals hitherto in a slow mode of development, our deep involvement in Land Acquisition matters and related issues, as well as the family partition issues in respect to agricultural, residential and commercialand all across the states in India, gives us a unique advantage to leverage our knowledge and expertise of litigation in negotiations and resolution of knotty issues with the land revenue administration in the states and the farmers and other stakeholder. BSA has been assisting its clients in:      </p>

      <ul className="list-disc pl-7">
      <li>Due diligence for title investigation, and relevant land revenue laws.      </li>
      <li>Concessionaire agreements between the Government/autonomous bodies and the Infrastructure Developer Company</li>
      <li>Advising revenue sharing model’s P2P basis.</li>
      <li>Assisting in monetizing the assets.</li>
      <li>Drafting, reviewing, and advising on Public-Private Partnership (PPP) agreements.</li>
      <li>Drafting and advising on the long-term leases including stamp duty implications, registration issues.</li>
      <li>Advising on the regular audit of public and private spaces having a direct bearing on social infrastructure.</li>
      <li>End to end Housing and Infrastructure advisory.      </li>
      <li>Advising and appearing in consumer cases before all forums including the Supreme Court of India.</li>
      <li>Appearing and representing our clients before the revenue as well as urban development authorities and the land revenue appellate authorities and the courts.</li>
      <li>Advising corporates on the implications under criminal law for involving in the real estate and infrastructure projects.</li>
      <li>Negotiating, reviewing agreements with the landowners to ensure a hassle-free execution of housing and commercial projects.</li>
      </ul>
      
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default InfrastructureRealEstate;