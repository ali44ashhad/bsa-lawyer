import React from "react";
import { motion } from "framer-motion";
import netWorth from '../../assets/practicesAreas/high-net-worth.jpg'
 
const HighNetWorth = () => {
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
  <div className="relative flex items-center justify-center mb-8 md:mb-12">
    {/* Background Lines */}
    <div className="absolute inset-x-0 flex flex-col gap-[3px] sm:md:gap-2 md:gap-1.5 lg:gap-2 w-full">
  {/* Top Gold Lines - Increased to 1px for mobile visibility */}
  <div className="h-[1px] md:h-[0.5px] w-full bg-[#AA9166]"></div>
  <div className="h-[1px] md:h-[0.5px] w-full bg-[#AA9166]"></div>
  
  {/* Middle White/Contrast Lines - Changed bg-white to an off-white or light gold if bg is white */}
  <div className="h-[1px] md:h-[0.5px] w-full bg-white"></div>
  <div className="h-[1px] md:h-[0.5px] w-full bg-white"></div>
  
  {/* Bottom Gold Lines */}
  <div className="h-[1px] md:h-[0.5px] w-full bg-[#AA9166]"></div>
  <div className="h-[1px] md:h-[0.5px] w-full bg-[#AA9166]"></div>
</div>

    {/* Heading: text-[6vw] ensures it fits on mobile without wrapping, scaling up to text-5xl */}
    <div className="z-10">
    <h1 className="garamond-font
   text-[4vw] 
   sm:text-3xl md:text-2xl lg:text-4xl 
  font-serif italic font-bold text-gray-900 
   whitespace-nowrap 
  text-center leading-tight
">
  High Net-worth and Ultra-Net-Worth Individuals
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
        src={netWorth}
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

      <p>We are in an era, where individual enterprises are rewarded without any limits. The Indian talent has established its authenticity way beyond the borders of the country, in the process, the acquisition of assets looks logical corollary. The more Individual enterprises rise, the more state has to decide the limits of Individual gains, and in the process, the HNI's, require their endeavors' to be guided through successfully. BSA has an unparalleled advantage of advising its clients due to in-depth forensic litigation expertise of around two and a half decades. BSA provides and assists its clients in:</p>
    <ul className="list-disc pl-8">
      <li>Preparing for smooth legacy transfers.</li>
      <li>Assists in the preparation of testamentary documents keeping in mind the various classes of assets and, intangible rights.
      </li>
<li>Multi-Jurisdictional succession planning, with a special focus on preserving the value of assets, and due allocation for future businesses and the vulnerable family members.</li>
<li>Examine and advise in settlement of trusts for the statutory entities viz. listed/non-listed companies with specific reference to special laws and the regulatory agencies like SEBI.
</li>
<li>Creating family trusts for family and the vulnerable dependents.
</li>
<li>Assets restructuring before bequeathing and strategic exits for the key managerial persons.</li>
<li>Family Governance structure to avoid unnecessary litigations and smooth running of family businesses by setting up family bodies like council or Boards.</li>
<li>Deal with the negotiating sale or transfer of collectible specialized assets, preservation of luxury and collectible items, and creation of private museums.</li>
<li>Providing for structuring and smooth functioning of philanthropic and charitable activities by establishment of charitable trusts, Section 8 Companies.</li>
<li>Inter- se disputes of family promoters and family businesses, pre-dispute negotiations, and family dispute resolution mechanisms for HNIs and business families.</li>
    </ul>
     
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default HighNetWorth;