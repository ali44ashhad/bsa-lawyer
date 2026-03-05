import React from 'react';
import { motion } from "framer-motion";
import articleImage from '../../assets/article/article-image.jpg'
import { Link } from 'react-router-dom';

const Article = () => {
  return (
   <>

    <div className="max-w-6xl mx-auto px-4 py-12 font-sans text-gray-800">
      {/* Header Section with Decorative Lines */}
      <div className="relative flex items-center justify-center mb-12">
      <div className="absolute inset-x-0 flex flex-col gap-1 md:gap-1.5 max-w-6xl mx-auto px-4">
    <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
    <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
    <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
    <div className="h-[0.5px] w-full bg-[#AA9166]"></div>
  </div>
        <div className="relative px-6">
          <h1 className="garamond-font text-5xl md:text-5xl font-serif italic font-bold text-gray-900">
            Articles
          </h1>
        </div>
      </div>

      {/* Article Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col">
          {/* Image */}
          <div className="mb-6 overflow-hidden">
            <img 
              src={articleImage}
              alt="Person signing documents" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Title */}
          <h2 className=" garamond-font text-2xl font-bold leading-tight mb-3 hover:text-blue-900 cursor-pointer">
            Startup Challenges in India: A Comprehensive Guide to Legal, Financial, and Ground-Level Barriers
          </h2>

          {/* Metadata */}
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <span className="mr-4 flex items-center">
              <span className="mr-2">📁</span> 
            </span>
            <span className="flex items-center">
              <span className="mr-2">📅</span> 03-June-2025
            </span>
          </div>

          {/* Excerpt */}
          <p className="text-gray-600 leading-relaxed mb-6">
            India is globally recognized as one of the fastest-growing startup hubs, 
            home to over 100,000 DPIIT-recognized startups across sectors like 
            fintech, edtech, agritech, and e-commerce. However, while success 
            stories inspire many, the reality for early-stage startups—especially 
            outside metro cities—is far from easy.
          </p>

          {/* Read More Link */}
          <Link to="/blog" className="text-amber-700 font-bold text-xs tracking-widest uppercase flex items-center hover:text-amber-900 transition-colors">
            Read More <span className="ml-2 text-lg">›</span>
          </Link>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-12">
        <nav className="inline-flex -space-x-px border border-amber-200" aria-label="Pagination">
          <button className="px-4 py-2 text-sm text-gray-500 bg-white border-r border-amber-200 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 text-sm text-gray-700 bg-white border-r border-amber-200 hover:bg-gray-50">
            1
          </button>
          <button className="px-4 py-2 text-sm text-white bg-stone-500 border-r border-amber-200">
            2
          </button>
          <button className="px-4 py-2 text-sm text-gray-700 bg-white border-r border-amber-200 hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </nav>
      </div>
    </div>
   </>
  );
};

export default Article;