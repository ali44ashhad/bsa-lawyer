import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react'; // Using Lucide for the icons
import { motion } from "framer-motion";


const Contact = () => {
  return (

    <>
      <div className="max-w-6xl mx-auto px-4 py-16 font-sans">
        {/* Header with Background Lines */}
        <div className="relative flex items-center justify-center mb-16">

          <div className="w-full relative flex items-center justify-center mb-12">
            <div className="absolute inset-x-0 flex flex-col gap-1 md:gap-1.5 max-w-6xl mx-auto px-4">
              <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
              <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
              <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
              <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
            </div>
            <div className="relative px-6">
              <h1 className="garamond-font text-4xl md:text-5xl font-serif italic font-bold text-gray-900">
                Contact Us
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side: Contact Details (The Dark Box) */}
          <div className="bg-[#121212] p-8 md:p-12">
            <div className="space-y-8">

              {/* Location Box */}
              <div className="border border-[#bca371]/40 p-6 flex items-start gap-6">
                <div className="border border-[#bca371] p-3 text-[#bca371]">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="garamond-font text-[#bca371] font-serif italic text-2xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-400 leading-relaxed">
                    A-140 Defence Colony,<br />
                    New Delhi-110024 India
                  </p>
                </div>
              </div>

              {/* Phone Box */}
              <div className="border border-[#bca371]/40 p-6 flex items-start gap-6">
                <div className="border border-[#bca371] p-3 text-[#bca371]">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="garamond-font text-[#bca371] font-serif italic text-2xl font-semibold mb-2">Phone</h3>
                  <div className="garamond-font text-[#bca371] font-serif italic text-xl space-y-1">
                    <p>011-46714601</p>
                    <p>011-46714602</p>
                  </div>
                </div>
              </div>

              {/* Email Box */}
              <div className="border border-[#bca371]/40 p-6 flex items-start gap-6">
                <div className="border border-[#bca371] p-3 text-[#bca371]">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="garamond-font text-[#bca371] font-serif italic text-2xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">info@bsalegalfirm.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex flex-col">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 p-3 outline-none focus:border-[#bca371] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 p-3 outline-none focus:border-[#bca371] transition-colors"
                />
              </div>
              <textarea
                rows="10"
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 outline-none focus:border-[#bca371] transition-colors resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#374151] text-white py-4 text-lg font-medium hover:bg-[#1f2937] transition-all"
              >
                Submit Form
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;