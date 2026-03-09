import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AboutSection from "./AboutSection";
import PracticeGrid from "./PracticeGrid";
import WhyChooseUs from "./WhyChoose";
import FAQSection from "./FaqSection";

import carousel1 from "../assets/home/home1.jpg";
import carousel2 from "../assets/home/home2.jpg";
import carousel3 from "../assets/home/home3.jpg";
import dpdpAd from "../assets/home/company-law.png";
import internAd from "../assets/home/sports-games.png";

const slides = [
  { id: "hero-1", src: carousel1, kind: "hero" },
  { id: "hero-2", src: carousel2, kind: "hero" },
  { id: "hero-3", src: carousel3, kind: "hero" },
  {
    id: "dpdp-ad",
    src: dpdpAd,
    kind: "ad",
    headline: "DPDP Act Compliance Check",
    subline: "Know your DPDP risk level in minutes.",
    ctaLabel: "Go to Risko-meter",
    to: "/risko-meter",
  },
  {
    id: "intern-ad",
    src: internAd,
    kind: "ad",
    headline: "BSA Internship Program",
    subline: "Apply for internship and start your legal journey with us.",
    ctaLabel: "Go to Intern Page",
    to: "/intern",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = useCallback(() => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[95vh] md:h-[85vh] overflow-hidden bg-black">

        {/* Sliding Track */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="w-full h-full relative flex-shrink-0"
            >
              <img
                src={slide.src}
                alt={`BSA Legal Firm Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* ================= Slide Text / CTA ================= */}
              <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4 overflow-hidden">
                {slide.kind === "ad" ? (
                  <div key={slide.id} className="max-w-3xl animate-slide-in">
                    <h2 className="garamond-font text-[#D4AF37] font-serif text-2xl sm:text-3xl md:text-5xl italic leading-tight drop-shadow-2xl">
                      {slide.headline}
                    </h2>
                    <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl drop-shadow">
                      {slide.subline}
                    </p>
                    <div className="mt-6 flex justify-center pointer-events-auto">
                      <button
                        type="button"
                        onClick={() => navigate(slide.to)}
                        className="bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-full hover:brightness-95 transition"
                      >
                        {slide.ctaLabel}
                      </button>
                    </div>
                  </div>
                ) : (
                  <h1
                    key={current}
                    className="
                      garamond-font
                      text-[#D4AF37]
                      font-serif
                      text-2xl
                      sm:text-3xl
                      md:text-5xl
                      lg:text-7xl
                      italic
                      leading-tight
                      max-w-6xl
                      drop-shadow-2xl
                      animate-slide-in
                    "
                  >
                    Bijender Singh Associates LLP
                    <br className="hidden sm:block" />
                    <span className="block sm:inline">
                      Advocates and Solicitors
                    </span>
                  </h1>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ================= Navigation Buttons ================= */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors bg-black/20 p-2 rounded-full hover:bg-black/40"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors bg-black/20 p-2 rounded-full hover:bg-black/40"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        {/* ================= Indicators ================= */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 transition-all duration-300 ${
                i === current
                  ? "w-12 bg-[#D4AF37]"
                  : "w-6 bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <AboutSection />
      <PracticeGrid />
      <WhyChooseUs />
      <FAQSection />
    </>
  );
};

export default Home;