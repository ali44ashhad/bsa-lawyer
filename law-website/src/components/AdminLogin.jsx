import React, { useState } from "react";
import axios from "axios";
import { Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react"; 

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });
  const [isError, setIsError] = useState(false); // New state to highlight fields

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (isError) setIsError(false); // Reset error styling when user types again
  };

  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });
    setTimeout(() => setPopup({ show: false, message: "", type: "" }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);

    try {
      const res = await axios.post("process.env.Backend_URL/api/admin/login | http://localhost:5002/api/admin/login", formData);
        
      if (res.data.success) {
        localStorage.setItem("adminToken", res.data.token);
        showPopup(res.data.message || "Access Granted ✅", "success");

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1500);
      }
    } catch (error) {
      // Backend handles incorrect password/email usually with 401 or 400
      const errMsg = error.response?.data?.message || "Invalid Credentials ❌";
      setIsError(true); // Highlight fields red
      showPopup(errMsg, "error"); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative overflow-hidden font-sans">
      
      {/* 🔔 Bottom-Right Notification */}
      {popup.show && (
        <div className={`fixed bottom-8 right-8 z-[100] px-6 py-4 rounded-2xl shadow-2xl text-white font-bold animate-in slide-in-from-bottom-5 fade-in duration-300 flex items-center gap-3 ${
            popup.type === "success" ? "bg-emerald-600 border-l-8 border-emerald-400" : "bg-rose-600 border-l-8 border-rose-400"
          }`}>
          {popup.type === "success" ? <div className="bg-white/20 p-1 rounded-full">✓</div> : <AlertCircle size={20} />}
          <div className="flex flex-col">
             <span className="text-[10px] opacity-80 uppercase tracking-tighter">{popup.type === "success" ? "System Notification" : "Security Alert"}</span>
             <span className="text-sm">{popup.message}</span>
          </div>
        </div>
      )}

      <div className={`max-w-5xl w-full grid md:grid-cols-2 bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100 transition-transform ${isError ? 'animate-shake' : ''}`}>
        
        {/* LEFT SIDE */}
        <div className="bg-slate-950 text-white p-12 flex flex-col justify-center">
           {/* Branding content... */}
           <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20">
                <Lock className="text-blue-500" size={32} />
            </div>
            <h2 className="text-4xl font-black mb-4 tracking-tight">SECURE<br/><span className="text-blue-500">ADMIN LOGIN</span></h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">Access restricted to authorized personnel only. Your IP address is being logged for security purposes.</p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Portal Sign In</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isError ? 'text-rose-500' : 'text-gray-400'}`} size={18} />
              <input
                type="email"
                name="email"
                placeholder="Admin Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full pl-12 pr-5 py-4 border rounded-2xl outline-none transition-all bg-gray-50 text-black ${
                    isError ? 'border-rose-500 ring-2 ring-rose-100' : 'border-gray-200 focus:ring-2 focus:ring-blue-600'
                }`}
              />
            </div>

            <div className="relative">
              <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isError ? 'text-rose-500' : 'text-gray-400'}`} size={18} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`w-full pl-12 pr-12 py-4 border rounded-2xl outline-none transition-all bg-gray-50 text-black ${
                    isError ? 'border-rose-500 ring-2 ring-rose-100' : 'border-gray-200 focus:ring-2 focus:ring-blue-600'
                }`}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm flex justify-center items-center transition-all ${
                loading
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : isError 
                    ? "bg-rose-600 text-white shadow-rose-200 shadow-lg" 
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 shadow-lg"
              }`}
            >
              {loading ? "AUTHENTICATING..." : "VERIFY IDENTITY"}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
      `}</style>
    </div>
  );
};

export default AdminLogin;