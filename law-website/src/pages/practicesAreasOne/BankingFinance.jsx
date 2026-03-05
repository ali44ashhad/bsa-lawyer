import React from "react";
import { motion } from "framer-motion";
import aboutSecond from '../../assets/about/about-second.jpg'
import bankingFinance from '../../assets/practicesAreas/banking.jpg'


const BankingFinance = () => {
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
      <h1 className="garamond-font text-[6vw] sm:text-4xl md:text-5xl lg:text-6xl font-serif italic font-bold text-gray-900 whitespace-nowrap text-center leading-tight">
        Banking, Finance, and Insolvency
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
        src={bankingFinance}
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
        BSA has in-depth exposure and experience in advising and representing various Indian 
        private and nationalized banks, and Financial Institutions in both Retail and Corporate
        Banking Transactions, involving structured finance, project finance, general corporate
        lending, commercial banking issues and recovery of stressed assets and enforcement of 
        security. BSA regularly advises its clients on compliance issues and regulatory requirements. 
        BSA has represented various NBFCs both in corporate and retail transactions and litigations 
        and has also advised and assisted foreign Banks in resolution of queries and in comprehension
        of the regulatory aspects involved in banking in India. 
        <br /><br />
        Our well-equipped and highly motivated
        team has handled legal due diligence in respect of financing and creation of securities in all
        secured credit related transactions; Multiple asset classes with the special focus on
        stressed assets under the securitization regime; Strategic issues pertaining to stake 
        sale and purchase in Private sector banks and minority investor issues; Project financing, 
        Corporate and Acquisition finance and Structured financing transactions and provided support 
        in strategizing litigations and representing our clients before NCLT, DRT, NCLAT, DRAT 
        and all other applicable forums and Courts.
        <br /><br />
        Having dealt with the legal issues pertaining to the Banking, 
        finance and the insolvency regime brings us to in-depth understanding of the 
        issues involved and the fruits of successful resolution of corporate credit and debt
        issues and the immense fruits thereof to the economy. We have been assisting our clients 
        in various stages of the insolvency, even in flagging the issues likely to have adverse
        impact on the running concerns and for the corporate creditors.
      </p>
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default BankingFinance;