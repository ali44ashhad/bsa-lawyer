import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/home/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= FIXED WRAPPER ================= */}
      <div className="fixed top-0 left-0 w-full z-[999]">

        {/* ================= DESKTOP TOP BAR ================= */}
        <div className="hidden md:block w-full bg-black text-white border-b border-gray-800">
          <div className="flex items-center justify-between px-6 lg:px-16 py-4">

            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="logo" className="h-14 w-auto" />
            </Link>

            {/* Desktop Contact */}
            <div className="flex `1` gap-10 text-sm">
              <div>
                <p className="font-semibold">9:00 - 9:00</p>
                <p className="text-gray-400">Opening Hour Mon - Sat</p>
              </div>  

              <div>
                <p className="font-semibold">011-46714601</p>
                <p className="font-semibold">011-46714602</p>
                <p className="text-gray-400">Call Us For Consultation</p>
              </div>

              <div className="flex items-center gap-6 text-lg">
                <FaTwitter className="hover:text-[#a57740] cursor-pointer transition" />
                <FaFacebook className="hover:text-[#a57740] cursor-pointer transition" />
                <FaLinkedin className="hover:text-[#a57740] cursor-pointer transition" />
                <FaInstagram className="hover:text-[#a57740] cursor-pointer transition" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP SECOND BAR ================= */}
        <div className="hidden md:flex w-full bg-[#0c1116] text-white shadow-md">
          <div className="w-full px-6 lg:px-16 py-4 flex items-center justify-between">

            {/* Left Side Menu */}
            <ul className="flex gap-10 text-sm tracking-wide">
              <Link to="/"><li className="hover:text-[#a57740] transition">HOME</li></Link>
              <Link to="/about"><li className="hover:text-[#a57740] transition">ABOUT</li></Link>
              <Link to="/practice"><li className="hover:text-[#a57740] transition">PRACTICE</li></Link>
              <Link to="/article"><li className="hover:text-[#a57740] transition">ARTICLE</li></Link>
              <Link to="/contact"><li className="hover:text-[#a57740] transition">CONTACT</li></Link>
            </ul>

            {/* Right Side Button */}
          <Link to="/contact">
          <button className="border border-yellow-600 px-5 py-2 hover:bg-yellow-600 hover:text-black transition">
              Get Appointment
            </button>
          </Link>

          </div>
        </div>

        {/* ================= MOBILE HEADER ================= */}
        <div className="md:hidden">

          {/* Logo Bar */}
          <div className="bg-black text-white py-3 flex justify-center border-b border-gray-800">
            <Link to="/">
              <img src={logo} alt="logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* MENU Bar */}
          <div className="bg-[#11161c] text-white flex items-center justify-between px-6 py-3">
            <p className="text-lg tracking-wide">MENU</p>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="border border-white px-3 py-1 rounded-sm"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE DROPDOWN ================= */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-[998]"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
         {/* ================= MOBILE DROPDOWN ================= */}
<div
  className={`md:hidden fixed left-0 w-full bg-[#0C1116] text-white z-[999] shadow-2xl 
  overflow-hidden transition-all duration-500 ease-in-out
  ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
  top-[130px]`}
>
  <ul className="flex flex-col gap-6 px-8 py-6 text-sm text-left">

    <Link to="/" onClick={() => setIsOpen(false)}>
      <li className="hover:text-[#a57740] transition">HOME</li>
    </Link>

    <Link to="/about" onClick={() => setIsOpen(false)}>
      <li className="hover:text-[#a57740] transition">ABOUT</li>
    </Link>

    <Link to="/practice" onClick={() => setIsOpen(false)}>
      <li className="hover:text-[#a57740] transition">PRACTICE</li>
    </Link>

    <Link to="/article" onClick={() => setIsOpen(false)}>
      <li className="hover:text-[#a57740] transition">ARTICLE</li>
    </Link>

    <Link to="/contact" onClick={() => setIsOpen(false)}>
      <li className="hover:text-[#a57740] transition">CONTACT</li>
    </Link>

  </ul>
</div>
        </>
      )}

      {/* ================= SPACER (IMPORTANT) ================= */}
      <div className="h-[133px] md:h-[140px]"></div>
    </>
  );
};

export default Navbar;