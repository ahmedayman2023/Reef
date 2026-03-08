import React from 'react';

const BentoGrid = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        
        {/* Hero Section - Large Square */}
        <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-[#1d4ed8] p-8 text-white shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.01]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Reef Residential</h2>
            <p className="mt-2 text-blue-100 text-lg">Modern architecture meets luxury living.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Featured</span>
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">New</span>
          </div>
        </div>

        {/* Stats Card - Tall */}
        <div className="md:col-span-1 md:row-span-2 rounded-3xl bg-white border border-gray-100 p-6 shadow-lg flex flex-col justify-center items-center text-center hover:border-[#1d4ed8] transition-colors group">
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#1d4ed8]/10 transition-colors">
            <svg className="w-8 h-8 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-4xl font-bold text-gray-900">150+</h3>
          <p className="text-gray-500 mt-1">Projects Completed</p>
        </div>

        {/* Feature Card - Small */}
        <div className="md:col-span-1 md:row-span-1 rounded-3xl bg-gray-50 p-6 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-gray-900 text-lg">Smart Design</h3>
          <p className="text-sm text-gray-500 mt-1">Optimized for comfort</p>
        </div>

        {/* Feature Card - Small Colored */}
        <div className="md:col-span-1 md:row-span-1 rounded-3xl bg-[#1d4ed8]/5 border border-[#1d4ed8]/20 p-6 flex flex-col justify-center">
          <h3 className="font-bold text-[#1d4ed8] text-lg">Eco-Friendly</h3>
          <p className="text-sm text-[#1d4ed8]/70 mt-1">Sustainable materials</p>
        </div>

        {/* Wide Card */}
        <div className="md:col-span-2 md:row-span-1 rounded-3xl bg-gray-900 p-6 text-white flex flex-row items-center justify-between shadow-lg">
          <div>
            <h3 className="font-bold text-xl">Start your journey</h3>
            <p className="text-gray-400 text-sm">Get in touch with our architects</p>
          </div>
          <button className="px-6 py-2 bg-[#1d4ed8] hover:bg-blue-600 rounded-full font-medium transition-colors">
            Contact Us
          </button>
        </div>

        {/* Image Placeholder Card */}
        <div className="md:col-span-2 md:row-span-1 rounded-3xl bg-gray-200 overflow-hidden relative group">
           <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 group-hover:scale-105 transition-transform duration-500">
             <span className="font-medium">Architectural Rendering</span>
           </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BentoGrid;