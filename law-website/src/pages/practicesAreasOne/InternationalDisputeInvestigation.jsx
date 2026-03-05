import React from "react";
import { motion } from "framer-motion";
import internationalImage from '../../assets/practicesAreas/international.jpg'
import competitionImage from '../../assets/practicesAreas/competition.jpg'

const InternationalDisputeInvestigation = () => {
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
        International Dispute and Investigation
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
        src={internationalImage}
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
      The growth of globalization in business and the international movement of capital by way of various financial instruments has led the people to a situation where cutting-edge expertise is required to traverse through international disputes and frauds in various business transactions. The dedicated team headed by the lawyer having hands-on experience of dealing with multijurisdictional assets transfers and investment-related issues resulting out of the Individuals desire to dupe the investors has made us one of the few leading firms in the field. The lawyers at BSA are fully geared up and have handled the issues relating to Corporate and Investment frauds, infra and real estate fraud, land-related frauds, frauds in the execution of contracts by the unscrupulous Contractors, forensic audits fabrication of financials by companies with its vendors, shareholders, and the statutory authorities. Trust-related fraudulent moves undermine the rival trustees thereby defeating the very purpose of the trust. We have represented and defended our clients right from the investigating agencies to the statutory authorities' special Investigation Teams in identifying and detecting Corporate Social Responsibility frauds, NGO Frauds and EXIM frauds before the specialized Tribunals dealing with serious Fraud and the highest court of the land.      </p>

      <ul className="list-disc pl-7">

      <li>Help in identifying and pinpointing collusive and audit-related frauds by way of skill set developed by BSA after a long and multifaceted research for years.</li>
      <li>Advising our clients on legal weaknesses and trackable identity of the business concerns located in other jurisdictions to avoid legal hassles.</li>
      <li>Raising awareness amongst corporates as well consumers at various levels and ensuring proper communication between the International and inter-jurisdictional agencies.      </li>
      <li>Helping in taking out letter Rogatory for the clients' victims of cross border crime, Indians as well as citizens of other countries and entities, advising them in choosing forums to prosecute the culprits.
      </li>
      <li>Identifying and flagging the prospective areas of concern for the corporate clients.      </li>
      <li>Identifying and sharing the legal tools helping in preventing the frauds and detecting the same without any further delay to contain the damage.      </li>
      <li>Helping clients in scrutinizing the documents pertaining to EXIM to avoid the hassles with the authorities and prevent undue advantage to the fraudsters.</li>
      </ul>
      
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default InternationalDisputeInvestigation;