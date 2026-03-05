import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaGraduationCap, FaEnvelope, FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaUserGraduate } from 'react-icons/fa';

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:5002";

const InternComponent = () => {
  const [state, setState] = useState({ data: [], loading: true, error: null });
  const [expandedField, setExpandedField] = useState(null);
    
  useEffect(() => {
    // Handling credentials for secure session/token
    axios
      .get(`${BACKEND_URL}/api/intern/getall-interns`, { withCredentials: true })
      .then((res) => {
        const records = res.data.success ? res.data.data : [];
        setState({ data: records, loading: false, error: null });
      })
      .catch((err) => {
        setState({
          data: [],
          loading: false,
          error:
            err.response?.status === 401
              ? "Unauthorized: Admin Login Required"
              : "Intern Database Offline",
        });
      });
  }, []);

  return (
    <div className="w-full">
      {state.loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4 animate-pulse">
          <div className="w-12 h-12 border-4 border-[#AA9166]/10 border-t-[#D8B233] rounded-full animate-spin"></div>
          <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Loading Intern Database...</p>
        </div>
      ) : state.error ? (
        <div className="bg-red-950/20 border border-red-500/30 p-10 rounded-3xl text-center">
          <FaUserGraduate className="mx-auto text-red-500 text-3xl mb-4" />
          <h2 className="text-xl font-bold text-white uppercase">{state.error}</h2>
        </div>
      ) : (
        <div className="bg-[#0A0A0A] border border-[#AA9166]/20 rounded-2xl overflow-hidden">
          {/* Table Header Section */}
          <div className="p-6 border-b border-[#AA9166]/10 flex justify-between items-center bg-gradient-to-r from-black to-[#AA9166]/5">
            <h3 className="text-xl font-bold text-[#D8B233] flex items-center gap-3">
              <FaGraduationCap /> Active Applications
            </h3>
            <span className="bg-[#AA9166] text-black px-3 py-1 rounded-full text-xs font-black">
              {state.data.length} TOTAL
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-[#AA9166] text-[10px] uppercase font-black tracking-widest border-b border-[#AA9166]/10">
                  <th className="px-6 py-4">Intern Name</th>
                  <th className="px-6 py-4">Academic Details</th>
                  <th className="px-6 py-4">Contact Info</th>
                  <th className="px-6 py-4">Applied Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#AA9166]/5">
  {state.data.map((intern) => (
    <tr key={intern._id} className="hover:bg-[#AA9166]/5 transition-all group">
      
      {/* Name column */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-900 border border-[#AA9166]/30 flex items-center justify-center text-[#D8B233] font-bold group-hover:bg-[#AA9166] group-hover:text-black transition-colors">
            {intern.name[0]?.toUpperCase()}
          </div>
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-tight">{intern.name}</p>
          </div>
        </div>
      </td>

      {/* Education / Academic Details Column */}
      <td className="px-6 py-5">
        {(() => {
          const fieldKey = `${intern._id}-edu`;
          const isExpanded = expandedField === fieldKey;
          return (
            <div 
              onClick={() => setExpandedField(isExpanded ? null : fieldKey)}
              className={`cursor-pointer transition-all duration-300 ${isExpanded ? "bg-[#AA9166]/10 p-2 rounded-lg border border-[#AA9166]/20" : ""}`}
            >
              <p className={`text-gray-300 text-xs font-medium ${isExpanded ? "" : "truncate max-w-[150px]"}`}>
                {intern.course}
              </p>
              <div className={`flex flex-wrap items-center gap-1 text-gray-500 text-[10px] uppercase font-bold mt-1`}>
                <span className={`${isExpanded ? "" : "truncate max-w-[120px]"}`}>{intern.college}</span>
                <span>•</span>
                <span className="text-[#AA9166]">{intern.currentYearOrSemester}</span>
              </div>
            </div>
          );
        })()}
      </td>

      {/* Contact column */}
      <td className="px-6 py-5">
        {(() => {
          const fieldKey = `${intern._id}-contact`;
          const isExpanded = expandedField === fieldKey;
          return (
            <div 
              onClick={() => setExpandedField(isExpanded ? null : fieldKey)}
              className={`flex flex-col gap-1 cursor-pointer transition-all duration-300 ${isExpanded ? "bg-[#AA9166]/10 p-2 rounded-lg border border-[#AA9166]/20" : ""}`}
            >
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <FaEnvelope className="text-[10px] text-[#AA9166] shrink-0" /> 
                <span className={isExpanded ? "break-all" : "truncate max-w-[150px]"}>{intern.email}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <FaPhone className="text-[10px] text-[#AA9166] shrink-0" /> 
                <span>{intern.mobileNumber}</span>
              </div>
            </div>
          );
        })()}
      </td>

      {/* Date column */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <FaCalendarAlt className="text-[#AA9166]" />
          {new Date(intern.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
        </div>
      </td>
      
    </tr>
  ))}
</tbody>
            </table>
          </div>

          {/* Empty State */}
          {state.data.length === 0 && (
            <div className="py-20 text-center flex flex-col items-center gap-4">
              <FaUserGraduate className="text-gray-800 text-5xl" />
              <p className="text-gray-600 font-bold uppercase text-xs">No intern applications found in current registry.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InternComponent;