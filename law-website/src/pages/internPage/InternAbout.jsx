import React from 'react'

const InternAbout = () => {
  return (
    <>
        <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" 
            alt="Law and Justice" 
            className="rounded-2xl shadow-2xl object-cover h-[400px] w-full"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            Mastering the <span className="text-[#D4AF37]">Bijender Singh Associates (BSA)</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our internship program focuses on the transformative shifts in the Indian legal landscape. 
            The BSA replaces the century-old Evidence Act, introducing modern standards for 
            digital evidence and electronic records.
          </p>
          <ul className="space-y-3">
            {['Admissibility of Electronic Records', 'Primary vs Secondary Evidence', 'Expert Opinion Frameworks'].map((item, idx) => (
              <li key={idx} className="flex items-center text-slate-700 font-medium">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default InternAbout