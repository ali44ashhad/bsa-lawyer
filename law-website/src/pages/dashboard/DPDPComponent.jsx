import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import {
    FaBuilding,
    FaUserTie,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaShieldAlt,
    FaSearch
} from "react-icons/fa";

const DPDPComponent = () => {
    const [state, setState] = useState({ items: [], loading: true, error: null });
    const [searchTerm, setSearchTerm] = useState(""); // Industry search state
    const [visibleCount, setVisibleCount] = useState(20); // Pagination state
    const [expandedField, setExpandedField] = useState(null);

    useEffect(() => {
        axios.get('process.env.Backend_URL/api/dpdp/getall | http://localhost:5002/api/dpdp/getall', { withCredentials: true })
            .then(res => {
                const records = res.data.success ? res.data.data : [];
                setState({ items: records, loading: false, error: null });
            })
            .catch(err => {
                setState({
                    items: [],
                    loading: false,
                    error: err.response?.status === 401 ? "Admin Authorization Required" : "Failed to connect"
                });
            });
    }, []);

    // --- Infinite Scroll Logic ---
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setVisibleCount(prev => prev + 20);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- Search Filtering (Based on Industry) ---
    const filteredItems = useMemo(() => {
        return state.items.filter(item =>
            item.industry?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, state.items]);

    // Pagination Slice
    const displayedItems = filteredItems.slice(0, visibleCount);

    return (
        <div className="w-full min-h-[500px]">

            {/* Header Section with Search Bar on Top Right */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-7">
                <div>
                    <h1 className="text-[#AA9166] font-black tracking-[0.4em] uppercase text-2xl">Secure Registry</h1>
                    <div className="h-1 w-20 bg-[#AA9166] mt-2"></div>
                </div>

                {/* Search Bar Container */}
                <div className="relative w-full md:w-80 group">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AA9166] text-sm group-focus-within:text-white transition-colors" />
                    <input
                        type="text"
                        placeholder="SEARCH BY INDUSTRY (e.g. Fintech)..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setVisibleCount(20); // Reset pagination when searching
                        }}
                        className="w-full bg-[#0A0A0A] border border-[#AA9166]/30 text-white text-[10px] font-bold tracking-widest rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-[#AA9166] focus:ring-1 focus:ring-[#AA9166] transition-all placeholder:text-gray-700"
                    />
                </div>
            </div>

            {state.loading ? (
                <div className="flex flex-col items-center justify-center py-32 space-y-4">
                    <div className="w-12 h-12 border-4 border-[#AA9166]/10 border-t-[#AA9166] rounded-full animate-spin"></div>
                    <p className="text-[#AA9166] text-xs font-bold tracking-[0.2em] uppercase">Decrypting Records...</p>
                </div>
            ) : state.error ? (
                <div className="bg-[#1A1111] border border-red-900/30 p-10 rounded-3xl text-center">
                    <FaShieldAlt className="mx-auto text-red-600 text-4xl mb-4" />
                    <h2 className="text-xl font-bold text-white uppercase">{state.error}</h2>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
                        {displayedItems.map((item) => (
                            <div key={item._id} className="group relative bg-[#0D0D0D] border border-[#AA9166]/20 rounded-2xl p-6 hover:border-[#AA9166]/80 transition-all duration-500 shadow-2xl overflow-hidden">

                                {/* Industry Badge */}
                                <div className="absolute -right-8 top-4 rotate-45 bg-[#AA9166] text-black px-10 py-1 text-[9px] font-black uppercase tracking-tighter shadow-lg group-hover:bg-[#D8B233] transition-colors">
                                    {item.industry}
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#D8B233] transition-colors uppercase tracking-tighter">
                                        {item.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-[#AA9166] text-[10px] font-bold uppercase mt-1 tracking-widest">
                                        <FaUserTie className="text-xs" /> {item.designation}
                                    </div>
                                </div>

                                <div className="space-y-4 border-t border-[#AA9166]/10 pt-5">
                                    {[
                                        { icon: <FaBuilding />, label: "Organization", val: item.company },
                                        { icon: <FaEnvelope />, label: "Official Email", val: item.email },
                                        { icon: <FaPhoneAlt />, label: "Direct Line", val: item.mobileNumber },
                                        { icon: <FaMapMarkerAlt />, label: "Jurisdiction", val: `${item.address}, ${item.city}` }
                                    ].map((row, idx) => {
                                        // Har block ke liye ek unique ID banate hain (Card ID + Row Index)
                                        const fieldKey = `${item._id}-${idx}`;
                                        const isExpanded = expandedField === fieldKey;

                                        return (
                                            <div key={idx} className="flex items-start gap-4">
                                                <span className="text-[#AA9166] mt-1 shrink-0 opacity-80">{row.icon}</span>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-[8px] text-gray-500 uppercase font-black tracking-widest leading-none mb-1">
                                                        {row.label}
                                                    </p>
                                                    <p
                                                        onClick={() => setExpandedField(isExpanded ? null : fieldKey)}
                                                        className={`text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out
                                                             ${isExpanded
                                                                ? "text-white whitespace-normal break-words shadow-inner"
                                                                : "text-gray-300 truncate hover:text-[#AA9166]"
                                                            }`}
                                                    >
                                                        {row.val}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {displayedItems.length === 0 && (
                        <div className="col-span-full py-32 text-center bg-black/40 border-2 border-dashed border-gray-900 rounded-[2rem]">
                            <p className="text-gray-600 font-bold uppercase tracking-widest">No matching records found for "{searchTerm}"</p>
                        </div>
                    )}

                    {/* Loading Indicator for Infinite Scroll */}
                    {visibleCount < filteredItems.length && (
                        <div className="w-full text-center py-10">
                            <p className="text-[#AA9166] text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">
                                Loading more records...
                            </p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default DPDPComponent;