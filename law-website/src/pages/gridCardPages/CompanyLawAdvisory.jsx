import React from "react";
import { motion } from "framer-motion";
import internationalImage from '../../assets/practicesAreas/international.jpg'
import companyLawImage from '../../assets/home/company-law.png'

const CompanyLawAdvisory = () => {
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
                                Company Law Advisory & Secretarial services
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
                                src={companyLawImage}
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
                                A business entity can be structured in multiple ways, however deciding as to what kind of structure will suit the best and how to keep it in good standing all year round by being fully compliant is where the role of company secretary or corporate lawyer in companies law comes into play.
                                <br /><br />

                                Company secretarial services are an important component of business administration. Primarily concerned with corporate governance, effective administration and compliance with regulations, company secretarial services, ESG encompass a wide range of legal, ethical, and corporate responsibilities.
                                <br /><br />

                                BSA is a full-fledged law firm having company secretarial services as one of the core division which provides a comprehensive range of services which includes setting up the corporate business entity including ‘Business Set-Up services’ and ‘Regular Compliance services. This unique mixture of company secretaries and lawyers has enabled BSA to offers wide array of customized solutions to meet your various needs which includes:



                            </p>

                            <ul className="list-disc pl-7">

                                <li>Incorporate new companies and LLP and provide your assistance in the case of Limited Liability Partnerships (LLP), Change of Name, Change of Objects, Change of status from Public Ltd to Private Ltd and vice versa.</li>
                                <li>Company complies with company law, maintains certain statutory registers, and makes the necessary filings with the Registrar of Companies such as annual returns, financial statements and regulatory forms.</li>
                                <li>Provide services in relation to holding and convening of Board/Shareholders/Auditors/ Debenture holders Meeting.    </li>
                                <li>Documentation- Certificate of Incorporation, Charter documents like Memorandum of Association and Articles of Association, Financial Statements like Balance Sheet, Profit & Loss account etc, Annual Report, Register of Director, Register of Charges, Annual Return, Details of Shareholders and Directors, Litigation Status Check and other documents required.</li>
                                <li>Help in obtaining various approvals required under the Companies Act, 2013 from the following- Registrar of Companies, Regional Director, Ministry of Corporate Affairs, National Company Law Tribunal (NCLT).</li>
                                <li>We offer complete range of services in connection with the following- Winding-up of Company or declaring company as defunct or striking-off company name.</li>
                                <li>We provide end to end transaction advisory services right from planning till execution and post execution compliance.
                                </li>
                                <li>We help in detailed review of internal records of the Company and identifying the gaps in the compliance structure and recommending corrective actions required to minimize the risk and lay a foundation for a compliant organization.</li>
                            </ul>

                        </motion.div>
                    </div>
                </section>

            </div>



        </>
    );
};

export default CompanyLawAdvisory;