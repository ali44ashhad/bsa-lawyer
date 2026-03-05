import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, ThumbsUp, Handshake } from 'lucide-react';
import aboutSecond from '../../assets/about/about-second.jpg'
import aboutLeftImage from '../../assets/about/about-left-image.jpeg'


const About = () => {
  return (
    <>
    <div className="w-full">

{/* ================= ABOUT CONTENT SECTION ================= */}
<section className="py-16 px-4">

<div className="relative flex items-center justify-center mb-12">
      <div className="absolute inset-x-0 flex flex-col gap-1 md:gap-1.5 max-w-6xl mx-auto px-4">
    <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
    <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
    <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
    <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
  </div>
        <div className="relative px-6">
          <h1 className=" garamond-font text-4xl md:text-5xl font-serif italic font-bold text-gray-900">
            About Us
          </h1>
        </div>
      </div>
  <div className="max-w-6xl mx-auto">

    {/* Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-lg shadow-lg"
    >
      <img
        src={aboutSecond}
        alt="About BSA"
        className="w-full h-auto object-cover"
      />
    </motion.div>

    {/* Text Content */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-10 space-y-6  text-sm md:text-sm leading-relaxed"
    >
      <p>
        Bijender Singh Associates LLP (BSA) is a New Delhi (INDIA) based Legal Firm.
        We provide a full range of comprehensive legal services which extend over a wide
        dimension of areas. We at BSA feel that it is not only legal excellence alone that
        is sufficient to provide legal and commercial advice, which our clients expect;
        our approach is to combine the legal expertise with an appreciation of the
        commercial environment in which our clients operate.
      </p>  

      <p>
        BSA constantly strive to keep abreast with the legislative challenges and
        technology innovation to identify the future legal issues having a legal impact
        on the legal rights of the individuals as well as domestic or foreign entities
        having the ambition to thrive in a growing market like India. We attempt to
        combine exceptional legal and business know-how with cutting-edge legal strategies
        and highly efficient case management, offer advice and practical solutions to our
        client’s queries, assisting them to solve business and legal problems with maximum
        efficiency and strategic vision.
      </p>

      <p>
        BSA offers its research and court experience for preparing and aligning its
        clients' legal rights. As a firm we operate in a democratic, non-hierarchical
        set-up, where even a new entrant has a say as far as the legal ideas are concerned,
        we nurture and groom the talent and feel proud to encourage the free flow of
        thought unhindered by any hierarchical demands. We pride ourselves to encourage
        and promote talent and ideas with our decades of experience and offer best-in-class
        solutions to our clients. We aim to provide exceptionally responsive, practical
        and quality legal advice and services to clients. We respond in a professional,
        timely and effective manner to meet the specific needs of our clients.
      </p>
    </motion.div>

  </div>
</section>

</div>


       

      {/* 2. Learn About Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
  {/* Changed flex to flex-col for Mobile/Tab and lg:flex-row for Desktop */}
  <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:items-start">
    
    {/* Left Side: Image with Black Border */}
    {/* mt-20 is removed for mobile and added only for large screens via lg:mt-20 */}
    <div className="lg:mt-20 relative flex items-start justify-center lg:justify-start w-full lg:w-auto">
      <div className="border-[10px] border-[#111111] inline-block shadow-2xl">
        <img 
          src={aboutLeftImage}
          alt="Lawyer in library" 
          className="w-full max-w-[900px] min-h-[450px] md:min-h-[600px] object-cover block"
        />
      </div>
    </div>

    {/* Right Side: Content */}
    {/* Width adjusted: w-full for mobile/tablet, w-[60%] for desktop only */}
    <div className="flex flex-col w-full lg:w-[60%]">
      
      {/* Custom Triple Line Heading */}
      <div className="relative flex items-center justify-center w-full py-5">
  
  {/* The Decorative Lines Container (Continuous) */}
  <div className="absolute inset-0 flex flex-col justify-center gap-1.5 w-full max-w-6xl mx-auto px-4">
    <div className="h-[1px] w-full bg-[#AA9166]"></div>
    <div className="h-[0.1px] w-full bg-[#AA9166] "></div>
    <div className="h-[1px] w-full bg-[#AA9166]"></div>
    <div className="h-[1px] w-full bg-[#AA9166]"></div>
  </div>

  {/* The Heading (Floating on top) */}
  {/* No background color here, so lines stay visible behind the text */}
  <h2 className="garamond-font relative z-10 text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-[#1A1A1A] text-center drop-shadow-sm text-nowrap">
    Bijender Singh, Advocate
  </h2>
  
</div>

      {/* Paragraph Text */}
      <p className="text-black leading-relaxed font-sans text-[15px] text-justify lg:text-left">
        A practicing lawyer since 1997. The demands of profession and the emerging professional
        dimensions led to the founding of Bijender Singh Associates (BSA) LLP in New Delhi, which has forayed into the emerging practice areas and now known as one of the go to Corporate and litigation firms. A professional career spanning over more than two decades, with his commitment and conviction, he has successfully persuaded the Highest Court of the land, High Courts and Specialized Tribunal on legal propositions, pertaining to the Constitutional, corporate, commercial and civil laws. His commitment to the cause of environment, underprivileged, human rights, transparency and accountability in public affairs.
        <br/><br/>
        Mr. Singh has a sui generis ability of handling all matters within the firm and does not have to rely on outside counsels. BSA offers its clients end-to-end solutions covering all aspects.
        <br/><br/>
        During his legal practice he happens to have appeared for PSBs, CPSEs, State and Central Government and a variety of Corporate and individuals’ clients. He has also handled several pro-bono and amicus matters. He has also been sought by autonomous bodies and the authorities involved in formulation of law, rules, regulations or bye laws.
        <br/><br/>
        Mr. Singh strives to build a relationship with his clients. He is a focused problem-solver who understands the challenges that each case presents and effectively brings solutions to the table. He has a knack for exposing frauds, be it documentary or otherwise at micro and macro levels. In the ever-changing corporate scenario, he is capable of protecting and securing huge funds flowing into or out of the coffers sanitizing the very route of the multi-billion investments. Mr. Singh has devoted his energy, academic credentials and the experience in developing, applying and solving the complicated legal issues with practical application of his litigation experience, professionals acumen, strategic insight and developed excellent credentials and reputation as a master strategist and as an expert litigation and corporate lawyer.
      </p>
    </div>
  </div>
</div>
     </>
  );
};

export default About;