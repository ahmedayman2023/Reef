import React from 'react';
import GridHero from '../components/GridHero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface GridHomeProps {
  isAr?: boolean;
}

export default function GridHome({ isAr = false }: GridHomeProps) {
  return (
    <div className={isAr ? 'rtl' : 'ltr'}>
      <Navbar isAr={isAr} />
      <GridHero isAr={isAr} />
      
      {/* Additional Content Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service Cards with Grid Pattern */}
            <div className="bg-slate-50 p-8 rounded-2xl relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #10b981 1px, transparent 1px),
                    linear-gradient(to bottom, #10b981 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg mb-6"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {isAr ? "التصميم المعماري" : "Architectural Design"}
                </h3>
                <p className="text-slate-600">
                  {isAr 
                    ? "تصاميم معمارية مبتكرة تجمع بين الجمال والوظائف العملية"
                    : "Innovative architectural designs that combine beauty with practical functionality"}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #10b981 1px, transparent 1px),
                    linear-gradient(to bottom, #10b981 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg mb-6"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {isAr ? "الهندسة الإنشائية" : "Structural Engineering"}
                </h3>
                <p className="text-slate-600">
                  {isAr 
                    ? "حلول هندسية متقدمة لضمان السلامة والاستدامة"
                    : "Advanced engineering solutions ensuring safety and sustainability"}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl relative overflow-hidden group hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #10b981 1px, transparent 1px),
                    linear-gradient(to bottom, #10b981 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg mb-6"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {isAr ? "إدارة المشاريع" : "Project Management"}
                </h3>
                <p className="text-slate-600">
                  {isAr 
                    ? "إدارة شاملة للمشاريع من التخطيط حتى التسليم"
                    : "Comprehensive project management from planning to delivery"}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer isAr={isAr} />
    </div>
  );
}
