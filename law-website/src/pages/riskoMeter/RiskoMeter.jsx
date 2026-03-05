import { useState, useEffect } from "react";
import DpdpForm from "../../components/DpdpForm";

const dpdpQuestions = [
    {
        id: 1,
        question: "What best describes your organization?",
        description: "DPDP Act has specific obligations based on organization size and type.",
        options: [
            "Individual / Freelancer",
            "Startup  ",
            "SME / Private Company",
            "Large Enterprise ",
            "Foreign Company processing Indian data",
        ],
        weights: [2, 3, 5, 7, 9],
        dpdpRelevance: "Data Fiduciary classification varies by size"
    },
    {
        id: 2,
        question: "Industry vertical?",
        description: "Sector-specific compliance requirements under DPDP Act.",
        options: [
            "IT / SaaS ",
            "E-commerce  ",
            "Healthcare  ",
            "Finance / FinTech ",
            "Education ",
            "Marketing / Advertising  ",
            "Other"
        ],
        weights: [7, 7, 9, 9, 5, 7, 3],
        dpdpRelevance: "Healthcare/FinTech have additional sectoral regulations"
    },
    {
        id: 3,
        question: "Do you collect personal data of individuals in India?",
        description: "DPDP Act applies if you process any personal data of individuals in India.",
        options: [
            "Yes ",
            "No "
        ],
        weights: [9, 5, 0, 3],
        dpdpRelevance: "Determines applicability of entire Act"
    },
    {
        id: 4,
        question: "What type of data do you collect?",
        description: "Higher penalties for sensitive personal data breaches.",
        options: [
            "Name, email, phone number",
            "Address, ID proof, KYC data",
            "Financial data",
            "Health/medical data",
            "Children's data (under 18)",
            "Sensitive Personal data"
        ],
        weights: [2, 5, 9, 9, 9, 7],
        dpdpRelevance: "Sections 8(7) & 9 - Higher protection for sensitive data"
    },
    {
        id: 5,
        question: "Do you obtain explicit user consent before collecting data?",
        description: "DPDP Act requires clear, itemized consent with withdrawal option.",
        options: [
            "Yes ",
            "No",
            "Not sure"
        ],
        weights: [0, 3, 7, 8],
        dpdpRelevance: "Section 6 - Valid consent is mandatory"
    },
    {
        id: 6,
        question: "Do you have a clear privacy policy available to users?",
        description: "Must specify purpose, retention, rights in clear language.",
        options: [
            "Yes ",
            "No" 
        ],
        weights: [0, 3, 8, 5],
        dpdpRelevance: "Section 5 - Notice requirements"
    },
    {
        id: 7,
        question: "Can users withdraw consent easily?",
        description: "Must enable access, correction, erasure, grievance redressal.",
        options: [
            "Yes ", 
            "No" 
        ],
        weights: [0, 3, 7, 8],
        dpdpRelevance: "Chapter III - Rights of Data Principals"
    },
    {
        id: 8,
        question: "Do you store personal data on:",
        description: "Cross-border transfer rules apply under DPDP Act.",
        options: [
            "Indian servers",
            " Foreign servers",
            "Both" 
        ],
        weights: [2, 3, 5, 8],
        dpdpRelevance: "Section 16 - Cross-border data transfers"
    },
    {
        id: 9,
        question: "Have you implemented reasonable security safeguards?",
        description: "Reasonable security practices mandatory to prevent breaches.",
        options: [
            "Yes ", 
            "No",
            "Not sure"
        ],
        weights: [0, 3, 7, 8],
        dpdpRelevance: "Section 8(5) - Security safeguards obligation"
    },
    {
        id: 10,
        question: "Do you have a process to report data breaches?",
        description: "72-hour breach notification mandatory to DPA & affected individuals.",
        options: [
            "Yes ", 
            "No" 
        ],
        weights: [0, 3, 7, 8],
        dpdpRelevance: "Section 8(6) - Breach notification requirements"
    },
    {
        id: 11,
        question: "Can users:",
        description: "Significant Data Fiduciaries must appoint DPO.",
        options: [
            "Access their data",
            "Request correction or deletion",
            " Nominate a representative" 
        ],
        weights: [0, 3, 7, 8],
        dpdpRelevance: "Section 10 - Data Protection Officer"
    },
    {
        id: 12,
        question: "Have you appointed a Data Protection Officer (DPO) (if applicable)?",
        description: "Existing frameworks may need DPDP alignment.",
        options: [
            "Yes ",
            "No" 
        ],
        weights: [2, 2, 5, 8],
        dpdpRelevance: "DPDP has unique India-specific requirements"
    }
];

export default function RiskoMeter() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [riskResult, setRiskResult] = useState(null);
    const [showSegmentSolutions, setShowSegmentSolutions] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    const handleAnswer = (option, questionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = {
            answer: option,
            weight: dpdpQuestions[questionIndex].weights[dpdpQuestions[questionIndex].options.indexOf(option)]
        };
        setAnswers(newAnswers);
        
        if (questionIndex < dpdpQuestions.length - 1) {
            setStep(questionIndex + 1);
        } else {
            calculateDPDPRisk(newAnswers);
            setShowOverlay(true);
        }
    };

    const calculateDPDPRisk = (allAnswers) => {
        if (allAnswers.length !== dpdpQuestions.length) return;
        
        let totalScore = 0;
        let maxPossibleScore = 0;
        const criticalFlags = [];
        const recommendations = [];
        
        allAnswers.forEach((ans, idx) => {
            const question = dpdpQuestions[idx];
            const weight = ans.weight;
            
            totalScore += weight;
            maxPossibleScore += Math.max(...question.weights);
            
            if (weight >= 7) {
                criticalFlags.push({
                    question: question.question,
                    answer: ans.answer,
                    risk: "HIGH",
                    section: question.dpdpRelevance
                });
            }
            
            if (weight > 3) {
                recommendations.push(`Fix: ${question.question} - Current: "${ans.answer}"`);
            }
        });
        
        const riskPercentage = (totalScore / maxPossibleScore) * 100;
        
        let riskCategory;
        let nextSteps;
        
        if (riskPercentage <= 25) {
            riskCategory = {
                level: "🟢 LOW RISK",
                color: "bg-green-900/20 border-green-500 text-green-400",
                description: "Broadly compliant but needs documentation review",
                penaltyRisk: "Low (₹10-50 lakhs for minor violations)"
            };
            nextSteps = ["Annual audit", "Employee refresher training"];
        } else if (riskPercentage <= 50) {
            riskCategory = {
                level: "🟡 MODERATE RISK",
                color: "bg-yellow-900/20 border-yellow-500 text-yellow-400",
                description: "Significant compliance gaps requiring immediate attention",
                penaltyRisk: "Medium (Up to ₹200 crores for breaches)"
            };
            nextSteps = ["90-day remediation plan", "DPO appointment", "Security audit"];
        } else {
            riskCategory = {
                level: "🔴 HIGH RISK",
                color: "bg-red-900/20 border-red-500 text-red-400",
                description: "Critical non-compliance - Enforcement action likely",
                penaltyRisk: "High (Up to ₹250 crores + business suspension)"
            };
            nextSteps = ["Immediate legal intervention", "Board-level review", "Regulatory engagement"];
        }
        
        setRiskResult({
            score: Math.round(totalScore),
            maxScore: Math.round(maxPossibleScore),
            percentage: riskPercentage.toFixed(1),
            category: riskCategory,
            criticalFlags,
            recommendations: recommendations.slice(0, 5),
            nextSteps,
            segment: determineClientSegment(allAnswers)
        });
        
        setShowSegmentSolutions(true);
    };

    const determineClientSegment = (answers) => {
        const orgType = answers[0]?.answer;
        if (orgType?.includes("Startup")) return "startup";
        if (orgType?.includes("Large Enterprise")) return "corporate";
        if (orgType?.includes("Foreign")) return "hnwi";
        return "sme";
    };

    const resetAssessment = () => {
        setStep(0);
        setAnswers([]);
        setRiskResult(null);
        setShowSegmentSolutions(false);
    };

    return (
        <div className="min-h-screen text-white">
            {/* Hero Section */}
            <div className=" bg-[#0E1116] relative border-b border-[#AA9166]/30">
                <div className="absolute inset-0 bg-[#AA9166]/5"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0E1116] border border-[#AA9166] mb-6">
                            <span className="text-[#AA9166] text-sm font-semibold">Bijender Singh & Associates</span>
                            <span className="ml-2 px-2 py-1 bg-[#AA9166] rounded-full text-xs text-black font-bold">Est. 2010</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            India's Premier <span className="text-[#AA9166]">Tech Law</span> Firm
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                            Specializing in DPDP Act 2023 compliance, breach prevention, 
                            and tech litigation. Protecting startups to Fortune 500 companies 
                            from ₹250 crore penalties.
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/" className="bg-[#AA9166] text-black hover:bg-[#8e7955] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg">
                               Free Compliance Check
                            </a>
                            <a href="/" className="bg-transparent border-2 border-[#AA9166] text-[#AA9166] hover:bg-[#AA9166]/10 px-8 py-4 rounded-xl font-bold text-lg">
                              Emergency Legal Support
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Bar */}
            <div className="bg-white border-b border-[#AA9166]/20">
                <div className=" max-w-7xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-2xl font-bold text-[#AA9166]">250+</div>
                            <div className="text-sm text-gray-500">Clients Protected</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#AA9166]">0</div>
                            <div className="text-sm text-gray-500">Major Breaches</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#AA9166]">15+</div>
                            <div className="text-sm text-gray-500">Years Tech Law</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#AA9166]">24/7</div>
                            <div className="text-sm text-gray-500">Response Team</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Calculator Section */}
            <div id="calculator" className="max-w-6xl mx-auto px-4 py-16">
                <div className=" rounded-2xl  bg-[#0E1116] shadow-2xl border border-[#AA9166]/30 p-8">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            DPDP Act 2023 Compliance Assessment
                        </h2>
                        <div className="flex justify-between items-center mb-4 text-gray-400">
                            <span>Question {step + 1} of {dpdpQuestions.length}</span>
                            <span className="text-[#AA9166] font-bold">
                                {step + 1}/{dpdpQuestions.length}
                            </span>
                        </div>
                        <div className="w-full bg-[#0E1116] rounded-full h-3">
                            <div 
                                className="bg-[#AA9166] h-3 rounded-full transition-all duration-500"
                                style={{ width: `${((step + 1) / dpdpQuestions.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    {riskResult ? (
                        <div className="space-y-8">
                            <div className={`border-2 rounded-xl p-8 ${riskResult.category.color}`}>
                                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-2">{riskResult.category.level}</h3>
                                        <p className="text-lg opacity-90">{riskResult.category.description}</p>
                                    </div>
                                    <div className="mt-4 md:mt-0 text-center">
                                        <div className="text-4xl font-bold">{riskResult.score}/{riskResult.maxScore}</div>
                                        <div className="text-sm uppercase tracking-wider">{riskResult.percentage}% Risk Level</div>
                                    </div>
                                </div>
                                
                                <div className="bg-black/40 rounded-lg p-4 mb-4 border border-white/10">
                                    <div className="font-bold text-[#AA9166] mb-2">⚠️ Penalty Exposure:</div>
                                    <p className="text-white">{riskResult.category.penaltyRisk}</p>
                                </div>
                            </div>

                            {riskResult.criticalFlags.length > 0 && (
                                <div className="bg-red-900/10 border border-red-500/50 rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-red-400 mb-4">🚨 Critical Compliance Gaps</h4>
                                    <ul className="space-y-3">
                                        {riskResult.criticalFlags.slice(0, 3).map((flag, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-red-500 mr-2">•</span>
                                                <div>
                                                    <span className="font-semibold text-white">{flag.question}</span>
                                                    <div className="text-gray-400 text-sm">Current: {flag.answer}</div>
                                                    <div className="text-xs text-[#AA9166]">{flag.section}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {showSegmentSolutions && (
                                <div id="solutions" className="bg-[#0E1116] rounded-xl p-8 border border-[#AA9166]/30">
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        Tailored Solutions for Your Organization
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="font-bold text-lg mb-4 text-[#AA9166]">🚀 Immediate Actions Required</h4>
                                            <ul className="space-y-3">
                                                {riskResult.nextSteps.map((step, idx) => (
                                                    <li key={idx} className="flex items-center text-gray-300">
                                                        <span className="text-[#AA9166] mr-3">✓</span>
                                                        {step}
                                                    </li>
                                                ))}
                                            </ul>
                                            
                                            <div className="mt-8">
                                                <button
                                                    onClick={resetAssessment}
                                                    className="bg-[#AA9166] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#8e7955] transition"
                                                >
                                                    Start New Assessment
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-lg mb-4 text-[#AA9166]">🛡️ Our Protection Package</h4>
                                            {["Pre-Breach Prevention", "24/7 Breach Response", "Litigation Defense"].map((title, i) => (
                                                <div key={i} className="bg-black p-4 rounded-lg border border-[#AA9166]/20">
                                                    <div className="font-bold text-white mb-1">{title}</div>
                                                    <div className="text-sm text-gray-500 italic">Expert legal & technical oversight</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {dpdpQuestions[step].question}
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {dpdpQuestions[step].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(option, step)}
                                        className="text-left p-6 rounded-xl border-2 border-[#AA9166]/20 bg-[#0E1116] hover:border-[#AA9166] hover:bg-black transition-all group"
                                    >
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black border border-[#AA9166]/30 group-hover:bg-[#AA9166] group-hover:text-black text-[#AA9166] font-bold mr-4 transition-colors">
                                                {String.fromCharCode(65 + idx)}
                                            </div>
                                            <div className="font-medium text-gray-300 group-hover:text-white transition-colors">
                                                {option}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {showOverlay && (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        
        {/* Close Button */}
        <button
            onClick={() => setShowOverlay(false)}
            className="absolute top-6 right-6 text-white text-2xl"
        >
            ✕
        </button>

        {/* Your Existing Component */}
        <DpdpForm />

    </div>
)}

            {/* Talent Section */}
            <div className=" py-16 border-y border-[#AA9166]/10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-[#0E1116] rounded-2xl border border-[#AA9166]/20 p-10">
                        <h2 className="text-3xl font-bold text-center text-white mb-12">
                            For <span className="text-[#AA9166]">Young Legal Talent</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {icon: "🤖", title: "Tech-Law Innovation", desc: "Work with AI legal tools and automated systems."},
                                {icon: "🌐", title: "Global Exposure", desc: "Handle international cross-border data transfers."},
                                {icon: "🚀", title: "Rapid Growth", desc: "Fast-track to partnership in a leading practice."}
                            ].map((item, i) => (
                                <div key={i} className="text-center p-6 hover:bg-black/50 rounded-xl transition">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h4 className="font-bold text-xl mb-3 text-[#AA9166]">{item.title}</h4>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Stories */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-[#aa9166] text-3xl font-bold text-center mb-12">
                    Protecting India's Digital Economy
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {icon: "🏦", title: "Leading FinTech", risk: "Saved: ₹145+ Crores"},
                        {icon: "🏥", title: "HealthTech Unicorn", risk: "Enabled: $50M Funding"},
                        {icon: "🛒", title: "E-commerce Giant", risk: "Protected: 10M+ Users"}
                    ].map((story, i) => (
                        <div key={i} className="bg-black rounded-xl p-8 border border-[#AA9166]/20 hover:border-[#AA9166]/50 transition">
                            <div className="text-[#AA9166] text-2xl mb-4">{story.icon}</div>
                            <h4 className="font-bold text-xl mb-3 text-white">{story.title}</h4>
                            <p className="text-gray-500 mb-4">DPDP compliance framework implemented across all verticals.</p>
                            <div className="text-sm text-[#AA9166] font-bold tracking-widest uppercase">{story.risk}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <div className="bg-black border-t border-[#AA9166]/30 py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready for DPDP Act 2026?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        With enforcement strengthening in 2026, now is the time to ensure 
                        complete compliance and avoid catastrophic penalties.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a href="/" className="bg-[#AA9166] text-black px-8 py-4 rounded-xl font-bold hover:bg-[#8e7955] transition">
                            Get Audit
                        </a>
                        <a href="/" className="bg-[#0E1116] border border-[#AA9166] text-[#AA9166] px-8 py-4 rounded-xl font-bold hover:bg-[#AA9166]/10 transition">
                            DPO-as-a-Service
                        </a>
                        <a href="/" className="bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition">
                            Litigation Check
                        </a>
                    </div>
                    <div className="mt-12 pt-8 border-t border-[#AA9166]/20">
                        <p className="text-gray-500 text-sm">
                            <span className="font-bold text-[#AA9166]">Bijender Singh & Associates</span> | 
                            India's Tech Law Specialists | DPDP Act Pioneers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}