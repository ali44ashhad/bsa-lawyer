import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import faq from '../assets/home/have-ques.jpg'
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Whats the process?",
      answer: "Clarifications about how we work."
    },
    {
      question: "Mode of Communication?",
      answer: "We offer various channels including email, phone, and secure video conferencing to ensure constant contact."
    },
    {
      question: "Want to know more about Our Expertise?",
      answer: "Our team specializes in diverse legal fields ranging from corporate law to intellectual property rights."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20 font-serif">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-4 lg:gap-8">
      
      {/* Left Side: Large Image with Frame */}
      <div className="w-full lg:w-[40%] flex justify-center lg:justify-start">
  <div className="border-[8px] md:border-[10px] border-[#111111] shadow-2xl w-full max-w-[400px] h-full">
    <img
      src={faq}
      alt="Statue of Justice"
      className="w-full h-full object-cover"
    />
  </div>
</div>
  
      {/* Right Side: Accordion Content */}
      <div className="w-full lg:w-[70%] flex flex-col justify-center">
        
        {/* Section Header with Horizontal Lines */}
        <div className="relative flex items-center justify-center w-full py-10">
  
  {/* The Decorative Lines Container (Continuous) */}
  <div className="absolute inset-0 flex flex-col justify-center gap-1.5 w-full max-w-6xl mx-auto px-4">
    <div className="h-[0.1px] w-full bg-[#AA9166]"></div>
    <div className="h-[0.1px] w-full bg-[#AA9166]"></div>
    <div className="h-[0.1px] w-full bg-[#AA9166]"></div>
    <div className="h-[0.1px] w-full bg-[#AA9166]"></div>
  </div>

  {/* The Heading (Floating on top) */}
  {/* No background color here, so lines stay visible behind the text */}
  <h2 className="garamond-font relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-samibold text-[#1A1A1A] text-center drop-shadow-sm px-4">
    Have A Questions
  </h2>
  
</div>
  
        {/* Accordion Items */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              {/* Top Divider for every item */}
              <div className="h-[0.5px] w-full bg-[#AA9166]/20 mb-2"></div>
              
              <div className="pb-6">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center gap-4 md:gap-6 py-4 text-left"
                >
                  {/* Number Box */}
                  <div className="w-10 h-10 flex items-center justify-center font-serif shrink-0 font-bold bg-[#111111] text-[#AA9166] text-sm">
                    {String(index + 1).padStart(2, '')}
                  </div>
                
                  {/* Question Text */}
                  <span className="flex-grow text-lg md:text-xl font-medium text-[#1A1A1A] group-hover:text-[#AA9166] transition-colors">
                    {faq.question}
                  </span>
  
                  {/* Icon */}
                  <div className="text-[#AA9166]">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
  
                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[200px] opacity-100 mt-2 ml-14 md:ml-16' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 text-base md:text-lg italic leading-relaxed border-l-2 border-[#AA9166]/30 pl-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Bottom line for the last item */}
          <div className="h-[0.5px] w-full bg-[#AA9166]/20"></div>
        </div>
  
        {/* CTA Button */}
        <div className="mt-10">
          <Link to="/contact">
          <button className="bg-[#111111] text-[#AA9166] px-10 py-4 font-bold text-[11px] tracking-[0.3em] border border-[#AA9166]/50 hover:bg-[#AA9166] hover:text-black transition-all duration-500 uppercase">
            Ask More
          </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FAQSection;