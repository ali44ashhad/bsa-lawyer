import React from "react";
import { motion } from "framer-motion";
import bankingFinance from '../../assets/practicesAreas/banking.jpg'
import competitionImage from '../../assets/practicesAreas/competition.jpg'

const CompetitionAndAntiTrust = () => {
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
        Competition and Anti-Trust Law
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
        src={competitionImage}
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
      The economies of scale have to deal with the issues having a serious bearing on the consumer as well as the markets arising out of market-behavior of big corporations, reflected in, exclusive dealing agreements, predatory pricing, margin squeezing, price-discrimination, bundling, purported loyalty schemes, squeezing margins, refusal to license IPRs, refusal to supply. By now the competition law has come of age, in developed economies, the issues faced by us lately were arising and dealt with by various jurisdictions almost for a century. The quest for law enforcement can be summed up as fair competition and fair price to the consumers. The Lawyers at BSA have extensively scanned and researched the legal arrangements across various jurisdictions, we have developed in-house strength to render quality advice, guidance, and effective representation and defense for our clients by working on:
      </p>

      <ul className="list-disc pl-7">

      <li>Strategic guidance and advice to our clients to successfully close their transaction, in consonance with the law thereby ringfencing the shareholders and the entity from adverse attention of the regulatory authorities</li>
      <li>Documentation plays a vital role not only in the smooth completion of the transaction but also in defending the same before the competent authorities (CCI in India). BSA helps in drafting and reviewing term sheets, proper and clear definitive agreements, Non-Disclosure Agreement (NDA), Non-competitive agreements (NCAs), also renders advise on the structuring of appropriate agreements to avoid anti-competitive terms or potential abuse of dominant position. Filings of applications in coordination or roping in the other experts in CCI for clearance of combinations, exceeding a threshold in terms of turnover or assets.</li>
      <li>Advising on regulatory issues to the foreign and domestic firms.</li>
      <li>Conducts litigation before CCI and also the Higher courts.</li>
      </ul>
      
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default CompetitionAndAntiTrust;