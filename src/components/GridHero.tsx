import React from 'react';
import Logo from './Logo';

interface GridHeroProps {
  isAr?: boolean;
}

export default function GridHero({ isAr = false }: GridHeroProps) {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Main Grid Container */}
      <div className="relative z-10 min-h-screen grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-0">
        
        {/* Logo Area - Top Left */}
        <div className="col-span-2 row-span-1 p-6 flex items-start justify-start">
          <div className="bg-slate-900 rounded-2xl p-4 shadow-lg">
            <Logo className="h-8 brightness-0 invert" isAr={isAr} />
          </div>
        </div>

        {/* Empty cells for spacing */}
        <div className="col-span-2 md:col-span-4 lg:col-span-4"></div>
        
        {/* Colored Block - Top Right */}
        <div className="col-span-2 row-span-2 bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg"></div>

        {/* Main Title Area */}
        <div className="col-span-4 md:col-span-6 lg:col-span-6 row-span-3 flex flex-col justify-center px-6 md:px-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-none tracking-tight">
            {isAr ? (
              <>
                أنظمة<br />
                الشبكة
              </>
            ) : (
              <>
                Grid<br />
                Systems
              </>
            )}
          </h1>
        </div>

        {/* Empty row for spacing */}
        <div className="col-span-4 md:col-span-6 lg:col-span-8 row-span-1"></div>

        {/* Colored Block - Bottom Left */}
        <div className="col-span-2 row-span-3 bg-gradient-to-tr from-emerald-600 to-emerald-500 shadow-lg"></div>

        {/* Subtitle Area */}
        <div className="col-span-2 md:col-span-4 lg:col-span-4 row-span-1 flex items-center px-6">
          <p className="text-lg md:text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed">
            {isAr 
              ? "كل مهندس يجب أن يعرفها" 
              : "every engineer should know"}
          </p>
        </div>

        {/* Additional Colored Block - Bottom Right */}
        <div className="col-span-2 row-span-2 bg-gradient-to-tl from-emerald-400 to-emerald-500 shadow-lg"></div>

        {/* Company Info Area */}
        <div className="col-span-2 md:col-span-4 lg:col-span-4 row-span-2 flex flex-col justify-center px-6">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {isAr ? "ريف الأمثل" : "Reef Al-Amthal"}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md">
              {isAr 
                ? "شركة رائدة في الاستشارات الهندسية والتصميم المعماري في المملكة العربية السعودية"
                : "Leading engineering consulting and architectural design company in Saudi Arabia"}
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg">
                {isAr ? "ابدأ مشروعك" : "Start Your Project"}
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors">
                {isAr ? "تعرف علينا" : "Learn More"}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom accent block */}
        <div className="col-span-2 row-span-1 bg-gradient-to-r from-emerald-300 to-emerald-400 shadow-lg"></div>

        {/* Small decorative element - Bottom Right Corner */}
        <div className="col-span-1 row-span-1 flex items-end justify-end p-4">
          <div className="w-6 h-6 bg-slate-900 transform rotate-45"></div>
        </div>

      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-500 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-emerald-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-slate-400 rounded-full opacity-50"></div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-100/30 pointer-events-none"></div>
    </div>
  );
}
