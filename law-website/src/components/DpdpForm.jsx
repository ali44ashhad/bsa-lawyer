import { useState } from "react";
import axios from "axios";

const DpdpForm = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "", company: "", designation: "", email: "",
    mobileNumber: "", address: "", city: "", industry: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const industries = ["Healthcare", "Fintech", "SaaS", "EdTech", "E-commerce", "IT Services", "Others"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });
    setTimeout(() => setPopup({ show: false, message: "", type: "" }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5002/api/dpdp/create", formData);
      if (res.data.success) {
        showPopup("Registration Successful! ✅", "success");
        // ✅ Form submit hote hi gayab ho jayega
        setTimeout(() => setIsVisible(false), 1500); 
      }
    } catch (error) {
      showPopup(error.response?.data?.message || "Submission Error ❌", "error");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Agar isVisible false hai, to poora overlay aur form return nahi hoga
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-2 md:px-4 overflow-y-auto">

  {/* ✅ Popup */}
  {popup.show && (
    <div
      className={`fixed bottom-6 right-4 z-[10000] px-4 py-2 rounded-lg shadow-xl text-white animate-bounce-subtle ${
        popup.type === "success"
          ? "bg-green-600"
          : "bg-red-600 border border-white"
      }`}
    >
      <span className="font-medium text-sm">{popup.message}</span>
    </div>
  )}

  {/* ✅ Form Card */}
  <div className="w-full mt-35 max-w-2xl bg-white shadow-xl rounded-xl p-2 md:p-3 relative animate-in fade-in zoom-in duration-300">

    {/* ❌ Close Button */}
    <button
      type="button"
      onClick={() => setIsVisible(false)}
      className="absolute top-3 right-3 text-gray-400 hover:text-red-600 transition-all p-1 rounded-full hover:bg-gray-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
      DPDP Registration
    </h2>

    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">

      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-style"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-style"
        />
      </div>

      {/* Company & Designation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
          className="input-style"
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
          required
          className="input-style"
        />
      </div>

      {/* Mobile & City */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          className="input-style"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          className="input-style"
        />
      </div>

      {/* Address */}
      <input
        type="text"
        name="address"
        placeholder="Full Address"
        value={formData.address}
        onChange={handleChange}
        required
        className="input-style"
      />

      {/* Industry */}
      <select
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        required
        className="input-style bg-white"
      >
        <option value="">Select Industry</option>
        {industries.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300 font-semibold shadow-md disabled:bg-gray-500"
      >
        {loading ? "Processing..." : "Submit Registration"}
      </button>

    </form>
  </div>

  <style>
    {`
      .input-style {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        outline: none;
        transition: 0.3s;
        color: black;
        background-color: #f9fafb;
        font-size: 14px;
      }

      .input-style:focus {
        border-color: #000;
        background-color: #fff;
        box-shadow: 0 0 0 3px rgba(0,0,0,0.05);
      }

      @keyframes bounce-subtle {
        0%,100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }

      .animate-bounce-subtle {
        animation: bounce-subtle 2s infinite;
      }
    `}
  </style>

</div>
  );
};

export default DpdpForm;