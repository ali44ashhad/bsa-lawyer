import React from 'react';
import { Gavel, Scale, Smile } from 'lucide-react';
import why from "../assets/home/whychoose.jpg"

const WhyChooseUs = () => {
    const features = [
        {
          icon: <Gavel className="w-16 h-16 text-[#C5A059] stroke-[1.5]" />,
          title: "Best law practices",
        },
        {
          icon: <Scale className="w-16 h-16 text-[#C5A059] stroke-[1.5]" />,
          title: "Efficiency & Trust",
        },
        {
          icon: <Smile className="w-16 h-16 text-[#C5A059] stroke-[1.5]" />,
          title: "Results you deserve",
        },
      ];
  return (
    <section className="bg-white py-12 px-6 md:px-20 lg:px-40 font-['Playfair_Display']">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2">
          {/* Header with decorative lines */}
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
  <h2 className="garamond-font relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-bold text-[#1A1A1A] text-center drop-shadow-sm px-4">
    Why Choose Us
  </h2>
  
</div>
          {/* List Items */}
          <div className="space-y-8">
          {features.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 group">
                {/* Large Icon Box */}
                <div className="bg-[#111111] 
                w-[180px] h-[180px] 
                md:w-[220px] md:h-[220px] 
                shrink-0 flex items-center justify-center 
                shadow-xl transition-transform duration-300 
                group-hover:scale-105">
            {item.icon}
          </div>
                
                {/* Title & Underline */}
                <div className="text-center sm:text-left">
                  <h3 className="garamond-font text-2xl md:text-4xl italic font-bold text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <div className="w-16 h-[2px] bg-[#C5A059] mt-3 mx-auto sm:mx-0"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image with Border */}
        <div className="w-full lg:w-1/2 flex justify-center items-stretch">
  <div className="border-[6px] border-[#111111] shadow-2xl w-[80%] max-w-[500px]">
    <img 
      src={why}
      alt="Lady Justice" 
      /* Increased max-h to 800px and used h-full with object-cover */
      className="w-full h-full min-h-[500px] md:min-h-[700px] object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default WhyChooseUs;