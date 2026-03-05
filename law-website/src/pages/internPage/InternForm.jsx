import React, { useState } from "react";
import axios from "axios";

const InternForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    city: "",
    state: "",
    college: "",
    course: "",
    currentYearOrSemester: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Show Popup
  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });

    setTimeout(() => {
      setPopup({ show: false, message: "", type: "" });
    }, 3000);
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.mobileNumber.length !== 10) {
      return showPopup("Mobile number must be 10 digits ❌", "error");
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5002/api/intern/create-intern",
        formData
      );

      if (res.data.success) {
        showPopup("Application submitted successfully ✅", "success");

        setFormData({
          name: "",
          email: "",
          mobileNumber: "",
          city: "",
          state: "",
          college: "",
          course: "",
          currentYearOrSemester: "",
        });
      }
    } catch (error) {
      console.error(error);
      showPopup(
        error.response?.data?.message || "Something went wrong ❌",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12 relative">
      
      {/* 🔔 Popup Bottom Right */}
      {popup.show && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-2xl text-white transition-all duration-500 ${
            popup.type === "success"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {popup.message}
        </div>
      )}

      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white shadow-2xl rounded-3xl overflow-hidden">

        {/* LEFT SIDE CONTENT - LAW WEBSITE STYLE */}
        <div className="bg-black text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Join Our Legal Internship Program
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Gain hands-on experience in corporate law, litigation research,
            compliance advisory, and legal drafting. Our internship program is
            designed to provide real courtroom and corporate exposure under
            experienced legal professionals.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Practical Legal Research Training</li>
            <li>✔ Drafting & Documentation Exposure</li>
            <li>✔ Mentorship from Senior Advocates</li>
            <li>✔ Certification upon Completion</li>
            <li>✔ Real Case Study Experience</li>
          </ul>

          <div className="mt-8 text-sm text-gray-400">
            Limited seats available. Apply today to build your legal career.
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Internship Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "name", placeholder: "Full Name", type: "text" },
              { name: "email", placeholder: "Email Address", type: "email" },
              { name: "mobileNumber", placeholder: "Mobile Number", type: "text" },
              { name: "city", placeholder: "City", type: "text" },
              { name: "state", placeholder: "State", type: "text" },
              { name: "college", placeholder: "College Name", type: "text" },
              { name: "course", placeholder: "Course", type: "text" },
              {
                name: "currentYearOrSemester",
                placeholder: "Current Year / Semester",
                type: "text",
              },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={["name", "email", "mobileNumber", "college"].includes(
                  field.name
                )}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
              />
            ))}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-semibold transition duration-300 flex items-center justify-center ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black hover:bg-gray-800 text-white"
              }`}
            >
              {loading ? (
                <>
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                  Submitting...
                </>
              ) : (
                "Apply Now"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InternForm;