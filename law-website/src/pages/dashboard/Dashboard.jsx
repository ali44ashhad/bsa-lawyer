import React, { useState } from 'react';
import { FaShieldHalved, FaUsers, FaBars, FaXmark, FaRightFromBracket } from "react-icons/fa6"; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import DPDPComponent from './DPDPComponent';
import InternComponent from './InternComponent';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dpdp');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (  
    <div className="pt-10 min-h-screen bg-black text-white flex flex-col md:flex-row overflow-x-hidden">
      
      {/* --- Mobile Header --- */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-[#AA9166]/20 bg-black sticky top-0 z-50">
        <h1 className="text-xl font-bold text-[#D8B233]">Admin Panel</h1>
        <div className="flex items-center gap-4">
          <button onClick={handleLogout} className="text-xl text-red-500">
            <FaRightFromBracket />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl text-[#AA9166]">
            {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* --- Left Sidebar (Fixed width on desktop) --- */}
      <aside className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 fixed md:relative inset-y-0 left-0 z-40
        w-full md:w-80 bg-black border-r border-[#AA9166]/20 p-6 
        transition-transform duration-300 ease-in-out flex flex-col
      `}>
        <div className="hidden md:block mb-10">
          <h1 className="text-2xl font-bold tracking-tight text-gray-400 uppercase text-left">
            ADMIN <span className="text-[#D8B233]">PANEL</span>
          </h1>
        </div>

        <nav className="space-y-4">
          <button
            onClick={() => { setActiveTab('dpdp'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition-all border ${
              activeTab === 'dpdp' 
              ? 'bg-[#AA9166] text-black border-[#AA9166]' 
              : 'bg-transparent text-gray-500 border-gray-800 hover:border-[#AA9166]/50'
            }`}
          >
            <FaShieldHalved className="text-xl" />
            DPDP Compliance
          </button>

          <button
            onClick={() => { setActiveTab('intern'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition-all border ${
              activeTab === 'intern' 
              ? 'bg-[#AA9166] text-black border-[#AA9166]' 
              : 'bg-transparent text-gray-500 border-gray-800 hover:border-[#AA9166]/50'
            }`}
          >
            <FaUsers className="text-xl" />
            Intern Management
          </button>
        </nav>

        <div className="mt-auto pt-10 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-[2px]">Secured Connection</p>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto relative">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Row with Logout on Right */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-[#AA9166] font-semibold mb-1">Overview</h2>
              <h3 className="text-3xl font-bold">
                {activeTab === 'dpdp' ? 'Data Protection' : 'Personnel Directory'}
              </h3>
            </div>

            {/* Desktop Logout Button - Inside the Flex Row */}
            <button 
              onClick={handleLogout}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-red-900/40 bg-red-950/20 text-red-500 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 text-xs font-black uppercase tracking-widest group"
            >
              <FaRightFromBracket className="group-hover:-translate-x-1 transition-transform" />
              Sign Out
            </button>
            
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {activeTab === 'dpdp' ? <DPDPComponent /> : <InternComponent />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;