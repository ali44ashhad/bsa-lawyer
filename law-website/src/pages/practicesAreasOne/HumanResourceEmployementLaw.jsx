import React from "react";
import { motion } from "framer-motion";
import humanResourceImage from '../../assets/practicesAreas/human-resource.jpg'
 
const HumanResourceEmployementLaw = () => {
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
   sm:text-3xl md:text-4xl lg:text-6xl 
  font-serif italic font-bold text-gray-900 
   whitespace-nowrap 
  text-center leading-tight
">
  Human Resources and Employment Law
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
        src={humanResourceImage}
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
      <ul className="list-disc pl-8">
        
        <li>Indian labor and employment market has undergone a sea change, the Government of India has done away with as many as 26 laws and came up with 4 different codes covering all the aspects. The new codes have tried to strike a fine balance between labor rights and the industry’s freedom. It is high time that the employers all across the sectors and the employees as well see each other as beneficial stakeholders in the growth of the industry, enterprise, and all other sectors of the economy. Gender sensitization and equality are much desired and both employers and authorities agree to the significance of the POSH as an important factor for a healthy work environment and economy as well. The Government is more inclined to allow voluntary compliance, and failure to do the same invites heavy penalties that apart, non-compliance in a highly competitive and globalized world, also invites adverse publicity. Human resource strategy and documentation, be it tackling an HR issue or preventing the one in the future, BSA firmly believes that proper strategy and legal documentation of the employer-employee issues are very critical and significant in a globalized business environment.</li>
      <li>Company-specific Policies and reference tools, organizing, and preparing company specific HR Policy and a referrable guide for employees and the HR department. On the understanding evolved over decades of dealing with labor issues and the emerging trends given the Court's and Governments interventions, we help our clients in value addition to our client's work environment and public standing.</li>
      <li>Advising on the applicability of relevant law and creating internal tools with timely updating of change in laws is part of our advisory practice.</li>
      <li>Stock options and share planning, we advise our clients in highly technical matters on the issues including tax implications and other regulatory issues arising out of ESOPs and the share allotment to the employees.</li>
      <li>Legal Auditing: It is one of the most critical areas, just for want of proper advice or following practices in a negligent manner may give rise to a serious issue on the compliance front, and may invite serious action from the authorities. We do regular audit to detect, identify, rectify existing and potential issues, based on our auditing we provide for the legally consistent practices in future. Legal process re-engineering is a must for any employer and BSA helps it by auditing the establishment.</li>
      <li>Litigation, the multiple challenges faced by an establishment or even by an employee on account of the developments in the law or the policies dictated by the business exigencies, also give rise to litigation. We have a dedicated labor litigation team to advise, represent and handle the litigation arising out of labour and HR issues.</li>
      </ul>

     
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default HumanResourceEmployementLaw;