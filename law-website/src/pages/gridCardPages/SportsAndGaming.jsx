import React from "react";
import { motion } from "framer-motion";
import internationalImage from '../../assets/practicesAreas/international.jpg'
import sportsImage from '../../assets/home/sports-games.png'

const SportsAndGaming = () => {
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
                                Sports & Gaming Law
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
                                src={sportsImage}
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
                                The Gaming and Sports Law regime in India is relatively new and a hardly exploited field of law. Sports law is based on how the law in general interacts with the sports activity. Sports law is not only an applied law in the field of sports but also a blend of laws in a number of jurisdictions. Sports law is also governed by the Law of Contracts wherein employee contract agreement must ensure that all contractual agreement accrues matters of intellectual property and other requisites between employee and employer.
                                <br /><br />

                                BSA provide legal advice in areas including the exploitation of commercial rights, new media and marketing rights, drafting of rules and regulations, investigations, disciplinary and anti-doping proceedings, anti-corruption, sports broadcasting, sports financing, e-sports, sports gambling and comprehensive legal services for clients involved in all aspects of college and amateur athletics as well.
                            </p>

                            <p>Sports Legal Services includes:</p>

                            <ul className="list-disc pl-7">
                                <li>Litigation, arbitrations</li>
                                <li>sponsorship, licensing and merchandising;</li>
                                <li>brand protection & management;</li>
                                <li>sports governance;</li>
                                <li>the drafting of rules and regulations;</li>
                                <li>disciplinary and anti-doping proceedings;</li>
                                <li>anti-corruption including match fixing;</li>
                                <li>bringing and defending challenges to the decisions and actions of sports governing bodies;    </li>
                                <li>dispute resolution (including mediation and expert determination)</li>
                                <li>cybersecurity and data privacy    </li>
                            </ul>

                        </motion.div>
                    </div>
                </section>

            </div>



        </>
    );
};

export default SportsAndGaming;