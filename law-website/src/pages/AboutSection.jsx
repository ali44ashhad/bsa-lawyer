import React from 'react';
import { ShieldCheck, Users, ThumbsUp, Handshake } from 'lucide-react';
import about from "../assets/home/home-about.jpeg"

const AboutSection = () => {
  return (
    <div className="w-full bg-white font-serif">
      {/* 1. Black Icon Bar Section */}
      <div className="bg-[#111111] w-full py-8 md:py-12">
        <div className="
    max-w-7xl mx-auto 
    grid 
    /* 1 Column on mobile, 2 on small tablets, 4 on desktop */
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-4 
    /* Vertical divider on mobile, Horizontal divider on desktop */
    divide-y md:divide-y-0 md:divide-x 
    divide-gray-800
  ">
          {/* Legal */}
          <div className="flex flex-col items-center justify-center py-6 md:py-0 space-y-2 group">
            <ShieldCheck className="text-[#c5a059] w-8 h-8 transition-transform group-hover:scale-110" />
            <span className="text-white garamond-font text-xl">Legal</span>
          </div>

          {/* Attorneys */}
          <div className="flex flex-col items-center justify-center py-6 md:py-0 space-y-2 group">
            <Users className="text-[#c5a059] w-8 h-8 transition-transform group-hover:scale-110" />
            <span className="text-white garamond-font text-xl">Attorneys</span>
          </div>

          {/* Success */}
          <div className="flex flex-col items-center justify-center py-6 md:py-0 space-y-2 group">
            <ThumbsUp className="text-[#c5a059] w-8 h-8 transition-transform group-hover:scale-110" />
            <span className="text-white garamond-font text-xl">Success</span>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center justify-center py-6 md:py-0 space-y-2 group">
            <Handshake className="text-[#c5a059] w-8 h-8 transition-transform group-hover:scale-110" />
            <span className="text-white garamond-font text-xl">Support</span>
          </div>
        </div>
      </div>
      {/* 2. Learn About Us Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* Left Side: Image with Black Border */}
          <div className="relative flex items-center justify-center lg:justify-center">
            <div className="border-[10px] border-[#111111]">
              <img
                src={about}
                alt="Lawyer in library"
                className="w-full max-w-[450px] object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col space-y-6">

            {/* Custom Triple Line Heading */}
            <div className="relative w-full flex items-center justify-center py-4">
              {/* 1. Background Lines: Full width, absolute so they don't push the text */}
              <div className="absolute inset-x-0 flex flex-col gap-1.5 w-full">
                <div className="h-[0.1px] w-full bg-[#AA9166]"></div>
                <div className="h-[0.1px] w-full bg-[#AA9166]"></div>
                <div className="h-[1px] w-full bg-[#AA9166]"></div>
                <div className="h-[0.1px] w-full bg-[#AA9166]" />
              </div>

              {/* 2. Heading: Keeping your exact classes, but relative to sit on top */}
              {/* Added 'bg-transparent' to ensure lines show through the letters */}
              <h2 className="garamond-font relative z-10 px-4 text-4xl md:text-5xl font-bold text-[#111111] whitespace-nowrap bg-transparent">
                Learn About Us
              </h2>
            </div>

            {/* Paragraph Text */}
            <p className="text-black leading-relaxed text-base font-sans">
              Our clients trusted us for their life, liberty, property, reputation,
              and Intellectual fruits to protect and defend and create the defences
              against the unwanted, uncalled for, and patently illegal and improper
              attacks or even sabotages from all sort of vested interests. The professional
              approach and cutting edge research, experience, and expertise led our clients
              to invite us to be part of the very formation of the basis of their rights and
              liabilities and create appropriate safeguards to ensure that the fruits of their
              handwork, intellect, and initiative are legally protected and defended in the
              eventuality they are called in question. We have been providing legal services
              to various clients. During the last two decades of our professional experience,
              we have dealt with variety of cases including very complicated issues in courts
              all across the sectors.
            </p>

            {/* Learn More Button */}
            <div>
              <button className="bg-[#111111] text-[#c5a059] px-8 py-3 uppercase tracking-widest font-bold hover:bg-[#c5a059] hover:text-white transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;