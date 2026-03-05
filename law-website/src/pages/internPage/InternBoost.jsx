import React from 'react'

const InternBoost = () => {
    const steps = [
      { title: "Legal Research", desc: "Navigating new BSA statutes and precedents." },
      { title: "Drafting", desc: "Crafting precise evidentiary affidavits." },
      { title: "Digital Literacy", desc: "Handling metadata and electronic signatures." },
      { title: "Court Room", desc: "Observing real-world BSA implementation." }
    ];
  
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12 uppercase tracking-wide">
            Your Career Boost Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative p-8 bg-white rounded-xl shadow-lg border-t-4 border-[#D4AF37] hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#D4AF37] text-white flex items-center justify-center rounded-lg font-bold">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{step.title}</h3>
                <p className="text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default InternBoost;