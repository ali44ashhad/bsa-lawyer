import React from "react";
import { motion } from "framer-motion";
import disputeImage from '../../assets/practicesAreas/dispute.jpg'


const DisputeResolution = () => {
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
        Dispute Resolution
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
        src={disputeImage}
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
      BSA has a highly motivated, dedicated, and successful litigation team, well experienced in all spheres of litigation and adept in the nuances of substantive as well as procedural laws. With one of the most strategically trained and experienced teams, BSA with more than 22 years of in-depth exposure has successfully served several, Public and Private sector clients, Individuals, Associations, Trusts, etc. BSA has handled multifaceted complex litigation at various stages in the courts, quasi-judicial authorities and tribunals. It is our habit to succeed by adopting an integrated approach towards the solution of a dispute. BSA has also represented clients in cross-border frauds and other commercial litigations. BSA has, always advised the client to take appropriate steps before domestic or foreign courts for execution of international awards. Dispute resolution essentially involves the determination of the coordinates and contours of the issues involved, the issues pertaining to substantive as well as procedural law and also pertaining to the courts of competent jurisdiction. In our quest to provide the best we: 
        <br /><br />
       <ul className="list-disc pl-7">
        <li>Appreciate the dispute and appropriate mode of resolution to advise the client.</li>
        <li>Decide on the applicable law, available forums, and the procedure relevant to the issue.</li>
        <li>Decide on a strategy for optimizing the chances of a favorable outcome for our client.</li>
        <li>Advising on negotiations, conciliation, mediation, arbitration, and inter-party internal resolution mechanism in all fairness to the legal position and the interests of our client.</li>
        <li>Coordinating and co-opting with the subject experts for expert evidence.</li>
        <li>Preparing pleadings, evidence, and cross-examinations in a court of law and other legal forums.</li>

        <li>Representing our clients in all sorts of Trials before Civil/Criminal/commercial forums.</li>
        <li>Appearing and defending clients in appeals arising out of the courts and adjudicatory forums.</li>
        </ul>
        <br/>
       
     <p>BSA has extensive experience in Arbitration, including the enforcement of international and foreign awards and we are invariably called and sought for:</p>
     <br/>

<ul className="list-disc pl-7">
  <li>Negotiating the Arbitration agreements, and the jurisdictional issues regarding the seat of arbitration.</li>
  <li>Advising and assisting our clients in mediation and conciliation and hedging all contentious issues and risks, in interests of the involved parties. It has been a tremendously successful area of our practice even involving international firms and the Public and Private Sector entities in India.</li>
  <li>Drawing appropriate strategy to approach the appropriate court for the appointment of Arbitrator, interim orders, and the final challenge to the award.</li>
  <li>Preparing and filing of claims and counterclaims to be filed in arbitral proceedings before the Arbitrator/ Arbitral Tribunal Including ICC Arbitrations.  </li>
  <li>Preparing documentary evidence, Affidavits in evidence, conducting of cross-examinations, and recording of expert evidence in complicated and technical Arbitrations.</li>
  <li>Advising on the appropriate court for the challenge of the Arbitration Awards, Preparing Objections/counter objections, and the written briefs for the court to assist in fast disposal of the challenge to the Arbitration.</li>
  <li>Advising in Arbitration Appeals arising out of Section 34 decisions by the Court and other appealable issues under the Arbitration and Conciliation Law.</li>
  <li>Representing our clients in Arbitration proceedings as well as the courts including the Supreme Court of India.</li>
</ul>

      
      </p>
    </motion.div>
  </div>
</section>

</div>


       
     </>
  );
};

export default DisputeResolution;