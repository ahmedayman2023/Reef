import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { CheckCircle2, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import { useEffect } from "react";

export default function ServiceDetail({ isAr }: { isAr: boolean }) {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {isAr ? "الخدمة غير موجودة" : "Service Not Found"}
          </h1>
          <Link to="/" className="text-emerald-600 font-bold hover:underline">
            {isAr ? "العودة للرئيسية" : "Back to Home"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/#services" 
              className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm mb-6 hover:text-emerald-300 transition-colors"
            >
              {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              {isAr ? "جميع الخدمات" : "All Services"}
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {isAr ? service.titleAr : service.title}
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              {isAr ? service.descriptionAr : service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-emerald-500 pb-4 inline-block">
                  {isAr ? "عن الخدمة" : "About the Service"}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                  {isAr ? service.longDescriptionAr : service.longDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {isAr ? "الفوائد الرئيسية" : "Key Benefits"}
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {(isAr ? service.benefitsAr : service.benefits)?.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={24} />
                      <span className="text-slate-700 font-medium leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-12">
                  {isAr ? "خطوات العمل" : "Our Process"}
                </h2>
                <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-8 before:w-0.5 before:bg-slate-100">
                  {service.process?.map((step, i) => (
                    <div key={i} className="relative flex gap-12 pl-4">
                      <div className="relative z-10 w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-lg shadow-emerald-600/20">
                        {step.step}
                      </div>
                      <div className="pt-2">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">
                          {isAr ? step.titleAr : step.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {isAr ? step.descriptionAr : step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-2xl font-bold mb-6 relative z-10">
                    {isAr ? "هل لديك مشروع؟" : "Have a Project?"}
                  </h3>
                  <p className="text-white/60 mb-8 relative z-10">
                    {isAr 
                      ? "تواصل معنا اليوم لمناقشة احتياجاتك الهندسية والحصول على استشارة فنية متخصصة."
                      : "Contact us today to discuss your engineering needs and get a specialized technical consultation."}
                  </p>
                  <Link 
                    to="/contact" 
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                  >
                    {isAr ? "اطلب الخدمة الآن" : "Request Service Now"}
                    {isAr ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                  </Link>
                </div>

                <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50">
                  <h4 className="font-bold text-slate-900 mb-6">{isAr ? "خدمات أخرى" : "Other Services"}</h4>
                  <div className="space-y-4">
                    {SERVICES.filter(s => s.id !== service.id).slice(0, 3).map(s => (
                      <Link 
                        key={s.id} 
                        to={`/services/${s.id}`}
                        className="flex items-center justify-between p-4 bg-white rounded-xl border border-transparent hover:border-emerald-200 hover:shadow-sm transition-all group"
                      >
                        <span className="text-slate-700 font-medium group-hover:text-emerald-600 transition-colors">
                          {isAr ? s.titleAr : s.title}
                        </span>
                        {isAr ? <ChevronLeft size={16} className="text-slate-300" /> : <ChevronRight size={16} className="text-slate-300" />}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
