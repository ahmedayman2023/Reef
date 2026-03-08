import { useRef, useState, ChangeEvent, FormEvent } from "react";
import { motion } from "motion/react";
import { 
  Building2, 
  HardHat, 
  Compass, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe,
  Briefcase,
  Lightbulb,
  MapPin,
  Phone,
  Mail,
  Leaf
} from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES, PROJECTS } from "../constants";

const Hero = ({ isAr }: { isAr: boolean }) => {
  const [rotation, setRotation] = useState({ x: -18, y: 26 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

  const startDrag = (x: number, y: number) => {
    setIsDragging(true);
    dragStart.current = { x, y, rx: rotation.x, ry: rotation.y };
  };

  const updateDrag = (x: number, y: number) => {
    if (!isDragging) return;
    const deltaX = x - dragStart.current.x;
    const deltaY = y - dragStart.current.y;

    setRotation({
      y: dragStart.current.ry + deltaX * 0.35,
      x: clamp(dragStart.current.rx - deltaY * 0.35, -70, 70),
    });
  };

  const endDrag = () => setIsDragging(false);

  const heroServices = [
    { icon: Compass, ar: "التصميم المعماري", en: "Architectural Design", pos: "top-5 left-1/2 -translate-x-1/2", to: "/services/1" },
    { icon: HardHat, ar: "الهندسة الإنشائية", en: "Structural Engineering", pos: "top-20 right-0", to: "/services/2" },
    { icon: Briefcase, ar: "إدارة المشاريع", en: "Project Management", pos: "bottom-20 right-0", to: "/services/4" },
    { icon: Lightbulb, ar: "التصميم الداخلي", en: "Interior Design", pos: "bottom-5 left-1/2 -translate-x-1/2", to: "/services/3" },
    { icon: Globe, ar: "الاستشارات الفنية", en: "Technical Consultation", pos: "bottom-20 left-0", to: "/services/5" },
    { icon: Building2, ar: "إشراف هندسي", en: "Construction Supervision", pos: "top-20 left-0", to: "/services/6" },
    { icon: Leaf, ar: "الاستشارات البيئية", en: "Environmental Consultation", pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", to: "/services/7" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_30%_18%,#11749f_0%,#0a5d8a_38%,#084e78_62%,#063f66_78%,#05355a_100%)]"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(125,211,252,0.26),rgba(3,37,66,0)_54%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c7fb3]/10 via-[#0a4d7a]/8 to-[#062e4b]/45" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="flex justify-center">
          <div className="flex justify-center">
            <div
              className={`relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[560px] lg:h-[560px] select-none touch-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              style={{ perspective: "1200px" }}
              onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
              onMouseMove={(e) => updateDrag(e.clientX, e.clientY)}
              onMouseUp={endDrag}
              onMouseLeave={endDrag}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                startDrag(touch.clientX, touch.clientY);
              }}
              onTouchMove={(e) => {
                const touch = e.touches[0];
                updateDrag(touch.clientX, touch.clientY);
              }}
              onTouchEnd={endDrag}
            >
              <div className="absolute inset-0 rounded-full bg-cyan-300/12 blur-3xl"></div>
              <div className="absolute inset-4 sm:inset-8 lg:inset-10 rounded-full border border-blue-100/30"></div>

              {heroServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.ar}
                    to={service.to}
                    className={`absolute ${service.pos} backdrop-blur-md border border-cyan-100/25 bg-[#123f62]/78 rounded-full px-4 py-2 text-[11px] sm:text-xs text-white/95 flex items-center gap-2 shadow-lg shadow-[#041526]/35 hover:bg-[#14527f]/90 hover:border-cyan-100/40 transition-all hover:scale-[1.03]`}
                    style={{
                      animation: `floatTag ${3.2 + index * 0.25}s ease-in-out ${index * 0.1}s infinite alternate`,
                    }}
                  >
                    <Icon size={13} className="text-blue-300" />
                    <span>{isAr ? service.ar : service.en}</span>
                  </Link>
                );
              })}

              <motion.div
                className="absolute left-1/2 top-1/2 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px] -translate-x-1/2 -translate-y-1/2"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateX: rotation.x, rotateY: rotation.y }}
                transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.7 }}
              >
                <div
                  className="absolute left-1/2 top-1/2 w-[260px] h-[72px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    transform: "translate(-50%, -50%) rotateX(90deg) translateZ(-82px)",
                    background: "radial-gradient(ellipse at center, rgba(2,6,23,0.58) 0%, rgba(2,6,23,0.28) 46%, rgba(2,6,23,0) 82%)",
                    filter: "blur(1.4px)",
                  }}
                />

                <div
                  className="absolute left-1/2 top-1/2 w-[360px] h-[360px] rounded-3xl border border-blue-200/20"
                  style={{
                    transform: "translate(-50%, -50%) rotateX(90deg) translateZ(-78px)",
                    background:
                      "linear-gradient(180deg, rgba(148,163,184,0.34) 0%, rgba(51,65,85,0.28) 42%, rgba(15,23,42,0.72) 100%), repeating-linear-gradient(90deg, rgba(148,163,184,0.08) 0 2px, rgba(15,23,42,0) 2px 22px)",
                    boxShadow: "0 38px 68px rgba(2,6,23,0.48)",
                  }}
                />

                <div className="absolute left-[72px] top-[60px] w-[78px] h-[184px]" style={{ transformStyle: "preserve-3d" }}>
                  <div className="absolute inset-0 border border-slate-200/28" style={{ transform: "translateZ(39px)", background: "linear-gradient(180deg, rgba(148,163,184,0.5), rgba(51,65,85,0.7))" }} />
                  <div className="absolute inset-0 border border-slate-200/16" style={{ transform: "rotateY(180deg) translateZ(39px)", background: "linear-gradient(180deg, rgba(100,116,139,0.42), rgba(15,23,42,0.78))" }} />
                  <div className="absolute inset-0 border border-slate-300/20" style={{ transform: "rotateY(90deg) translateZ(39px)", background: "linear-gradient(180deg, rgba(71,85,105,0.8), rgba(30,41,59,0.92))" }} />
                  <div className="absolute inset-0 border border-slate-300/20" style={{ transform: "rotateY(-90deg) translateZ(39px)", background: "linear-gradient(180deg, rgba(71,85,105,0.8), rgba(30,41,59,0.92))" }} />

                  {[14, 44, 74, 104, 134].map((y) => (
                    <div key={`res-window-${y}`} className="absolute left-[9px] w-[60px] h-[18px] border border-blue-100/20" style={{ top: `${y}px`, transform: "translateZ(40px)", background: "linear-gradient(170deg, rgba(191,219,254,0.36), rgba(30,58,138,0.2))" }} />
                  ))}
                </div>

                <div className="absolute right-[72px] top-[52px] w-[84px] h-[206px]" style={{ transformStyle: "preserve-3d" }}>
                  <div className="absolute inset-0 border border-cyan-100/26" style={{ transform: "translateZ(42px)", background: "linear-gradient(180deg, rgba(186,230,253,0.42), rgba(14,116,144,0.32), rgba(8,47,73,0.56))" }} />
                  <div className="absolute inset-0 border border-cyan-100/16" style={{ transform: "rotateY(180deg) translateZ(42px)", background: "linear-gradient(180deg, rgba(14,165,233,0.28), rgba(8,47,73,0.5))" }} />
                  <div className="absolute inset-0 border border-slate-300/18" style={{ transform: "rotateY(90deg) translateZ(42px)", background: "linear-gradient(180deg, rgba(15,23,42,0.86), rgba(2,6,23,0.95))" }} />
                  <div className="absolute inset-0 border border-slate-300/18" style={{ transform: "rotateY(-90deg) translateZ(42px)", background: "linear-gradient(180deg, rgba(15,23,42,0.86), rgba(2,6,23,0.95))" }} />

                  {[16, 52, 88, 124, 160].map((y) => (
                    <div key={`hotel-window-${y}`} className="absolute left-[10px] w-[64px] h-[22px] border border-cyan-100/18" style={{ top: `${y}px`, transform: "translateZ(43px)", background: "linear-gradient(165deg, rgba(186,230,253,0.34), rgba(14,165,233,0.14), rgba(8,47,73,0.24))" }} />
                  ))}
                </div>

                <div className="absolute left-[116px] top-[126px] w-[98px] h-[116px]" style={{ transformStyle: "preserve-3d" }}>
                  <div
                    className="absolute inset-0 border border-slate-200/35"
                    style={{
                      transform: "translateZ(49px)",
                      background:
                        "linear-gradient(180deg, rgba(148,163,184,0.52) 0%, rgba(100,116,139,0.44) 34%, rgba(51,65,85,0.64) 100%), repeating-linear-gradient(90deg, rgba(226,232,240,0.12) 0 2px, rgba(255,255,255,0.02) 2px 24px)",
                    }}
                  />
                  <div
                    className="absolute inset-0 border border-slate-200/25"
                    style={{
                      transform: "rotateY(180deg) translateZ(49px)",
                      background:
                        "linear-gradient(180deg, rgba(100,116,139,0.52), rgba(30,41,59,0.72)), repeating-linear-gradient(90deg, rgba(226,232,240,0.08) 0 2px, rgba(255,255,255,0.01) 2px 24px)",
                    }}
                  />
                  <div className="absolute inset-0 border border-slate-300/20" style={{ transform: "rotateY(90deg) translateZ(49px)", background: "linear-gradient(180deg, rgba(71,85,105,0.74), rgba(15,23,42,0.9))" }} />
                  <div className="absolute inset-0 border border-slate-300/20" style={{ transform: "rotateY(-90deg) translateZ(49px)", background: "linear-gradient(180deg, rgba(71,85,105,0.74), rgba(15,23,42,0.9))" }} />
                  <div
                    className="absolute inset-0 border border-slate-200/35"
                    style={{
                      transform: "rotateX(90deg) translateZ(58px)",
                      background: "linear-gradient(180deg, rgba(191,219,254,0.92), rgba(96,165,250,0.74))",
                    }}
                  />

                  <div className="absolute left-1/2 bottom-0 w-[30px] h-[68px] -translate-x-1/2" style={{ transformStyle: "preserve-3d" }}>
                    <div className="absolute inset-0 border border-slate-300/30" style={{ transform: "translateZ(50px)", background: "linear-gradient(180deg, rgba(30,41,59,0.82), rgba(15,23,42,0.95))" }} />
                    <div className="absolute left-[22px] top-[36px] w-[2px] h-[2px] rounded-full bg-slate-200/80" style={{ transform: "translateZ(51px)" }} />
                  </div>

                  <div className="absolute left-[10px] top-[16px] w-[26px] h-[28px]" style={{ transformStyle: "preserve-3d" }}>
                    <div className="absolute inset-0 border border-blue-100/20" style={{ transform: "translateZ(50px)", background: "linear-gradient(165deg, rgba(191,219,254,0.42), rgba(30,58,138,0.2))" }} />
                  </div>

                  <div className="absolute right-[10px] top-[16px] w-[26px] h-[28px]" style={{ transformStyle: "preserve-3d" }}>
                    <div className="absolute inset-0 border border-blue-100/20" style={{ transform: "translateZ(50px)", background: "linear-gradient(165deg, rgba(191,219,254,0.42), rgba(30,58,138,0.2))" }} />
                  </div>
                </div>

                <div className="absolute left-[226px] top-[164px] w-[92px] h-[78px]" style={{ transformStyle: "preserve-3d" }}>
                  <div className="absolute inset-0 border border-slate-200/24" style={{ transform: "translateZ(46px)", background: "linear-gradient(180deg, rgba(148,163,184,0.46), rgba(71,85,105,0.6))" }} />
                  <div className="absolute inset-0 border border-slate-200/16" style={{ transform: "rotateY(180deg) translateZ(46px)", background: "linear-gradient(180deg, rgba(100,116,139,0.42), rgba(30,41,59,0.7))" }} />
                  <div className="absolute inset-0 border border-slate-300/18" style={{ transform: "rotateY(90deg) translateZ(46px)", background: "linear-gradient(180deg, rgba(15,23,42,0.86), rgba(2,6,23,0.94))" }} />
                  <div className="absolute inset-0 border border-slate-300/18" style={{ transform: "rotateY(-90deg) translateZ(46px)", background: "linear-gradient(180deg, rgba(15,23,42,0.86), rgba(2,6,23,0.94))" }} />

                  <div className="absolute left-[8px] top-[10px] w-[76px] h-[26px] border border-blue-100/18" style={{ transform: "translateZ(47px)", background: "linear-gradient(165deg, rgba(191,219,254,0.32), rgba(59,130,246,0.14), rgba(30,58,138,0.2))" }} />
                  <div className="absolute left-[8px] top-[42px] w-[76px] h-[26px] border border-blue-100/18" style={{ transform: "translateZ(47px)", background: "linear-gradient(165deg, rgba(191,219,254,0.32), rgba(59,130,246,0.14), rgba(30,58,138,0.2))" }} />
                </div>

                <div className="absolute left-[26px] top-[178px] w-[102px] h-[64px]" style={{ transformStyle: "preserve-3d" }}>
                  <div className="absolute inset-0 border border-cyan-100/22" style={{ transform: "translateZ(30px)", background: "linear-gradient(180deg, rgba(186,230,253,0.35), rgba(14,165,233,0.18), rgba(8,47,73,0.28))" }} />
                  <div className="absolute inset-0 border border-cyan-100/14" style={{ transform: "rotateY(180deg) translateZ(30px)", background: "linear-gradient(180deg, rgba(14,165,233,0.24), rgba(8,47,73,0.32))" }} />
                  <div className="absolute inset-0 border border-slate-300/18" style={{ transform: "rotateY(90deg) translateZ(30px)", background: "linear-gradient(180deg, rgba(15,23,42,0.88), rgba(2,6,23,0.95))" }} />
                  <div className="absolute inset-0 border border-slate-300/18" style={{ transform: "rotateY(-90deg) translateZ(30px)", background: "linear-gradient(180deg, rgba(15,23,42,0.88), rgba(2,6,23,0.95))" }} />
                  <div className="absolute left-[10px] top-[12px] w-[82px] h-[18px] border border-cyan-100/16" style={{ transform: "translateZ(31px)", background: "linear-gradient(165deg, rgba(186,230,253,0.34), rgba(14,165,233,0.14), rgba(8,47,73,0.22))" }} />
                </div>

                <div
                  className="absolute left-[154px] top-[100px] w-[122px] h-[20px]"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(16px)",
                  }}
                >
                  <div className="absolute inset-0 border border-slate-100/26" style={{ transform: "translateZ(10px)", background: "linear-gradient(180deg, rgba(125,211,252,0.86), rgba(96,165,250,0.54))" }} />
                  <div className="absolute inset-0 border border-slate-100/18" style={{ transform: "rotateY(180deg) translateZ(10px)", background: "linear-gradient(180deg, rgba(59,130,246,0.46), rgba(37,99,235,0.3))" }} />
                  <div className="absolute inset-0 border border-slate-200/18" style={{ transform: "rotateY(90deg) translateZ(10px)", background: "linear-gradient(180deg, rgba(30,58,138,0.58), rgba(30,58,138,0.42))" }} />
                  <div className="absolute inset-0 border border-slate-200/18" style={{ transform: "rotateY(-90deg) translateZ(10px)", background: "linear-gradient(180deg, rgba(30,58,138,0.58), rgba(30,58,138,0.42))" }} />
                  <div className="absolute inset-0 border border-slate-100/28" style={{ transform: "rotateX(90deg) translateZ(10px)", background: "linear-gradient(180deg, rgba(186,230,253,0.9), rgba(125,211,252,0.62))" }} />
                </div>
              </motion.div>

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-white/80 bg-[#0f2f49]/80 px-3 py-1 rounded-full border border-cyan-100/25">
                {isAr ? "اسحب لتحريك المبنى 360°" : "Drag to rotate the building 360°"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatTag {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }

        @keyframes reefWave {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-120px, 0, 0); }
        }
      `}</style>

      <div className="absolute inset-x-0 bottom-0 h-[42vh] pointer-events-none z-[1] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#071f35]/82 via-[#0a3b60]/28 to-transparent" />
        <div
          className="absolute -left-[16%] -right-[16%] bottom-[6%] h-[60%] opacity-80"
          style={{
            background:
              "repeating-linear-gradient(165deg, rgba(203,225,255,0.45) 0 5px, rgba(190,216,255,0.16) 5px 19px, rgba(8,41,71,0) 19px 35px)",
            filter: "blur(1px)",
            animation: "reefWave 18s linear infinite",
          }}
        />
        <div
          className="absolute -left-[20%] -right-[20%] -bottom-[2%] h-[58%] opacity-55"
          style={{
            background:
              "repeating-linear-gradient(168deg, rgba(226,238,255,0.35) 0 4px, rgba(186,213,245,0.1) 4px 16px, rgba(8,41,71,0) 16px 31px)",
            filter: "blur(1.6px)",
            animation: "reefWave 24s linear infinite reverse",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#071728]/90 to-transparent" />
      </div>

      <div className="absolute inset-0 z-0 opacity-15 mix-blend-screen pointer-events-none">
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] [background-size:28px_28px]" />
      </div>

      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
        <p className="text-[11px] sm:text-xs tracking-[0.25em] text-cyan-50/75 uppercase">
          {isAr ? "حلول هندسية متكاملة" : "Integrated Engineering Solutions"}
        </p>
        <h1 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90">
          {isAr ? "ريف الأمثل للاستشارات الهندسية" : "Reef Al-Amthal Engineering Consulting"}
        </h1>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
        <Link
          to="/contact"
          className="px-5 py-2 rounded-full border border-cyan-100/35 text-cyan-50/90 text-xs sm:text-sm bg-[#0b3554]/55 backdrop-blur-md hover:bg-[#11486f]/75 transition-colors"
        >
          {isAr ? "ابدأ مشروعك" : "Start Your Project"}
        </Link>
      </div>
    </section>
  );
};

const About = ({ isAr }: { isAr: boolean }) => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://i.im.ge/2026/03/08/eghkF8.WhatsApp-Image-2026-02-25-at-14-05-22.jpeg" 
              alt="" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
            <div className="text-4xl font-bold mb-1">15+</div>
            <div className="text-sm opacity-80 uppercase tracking-widest">{isAr ? "عاماً من التميز" : "Years of Excellence"}</div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">
            {isAr ? "من نحن" : "About Us"}
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {isAr ? "شريكك الموثوق في النجاح الهندسي" : "Your Trusted Partner in Engineering Success"}
          </h3>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {isAr 
              ? "تأسست شركة ريف الأمثل لتكون منارة للتميز الهندسي في المنطقة. نحن نجمع بين الخبرة العميقة والتقنيات الحديثة لتقديم استشارات هندسية تتجاوز التوقعات."
              : "Reef Al-Amthal was founded to be a beacon of engineering excellence in the region. We combine deep expertise with modern technologies to provide engineering consultations that exceed expectations."}
          </p>
          
          <div className="space-y-4 mb-10">
            {[
              isAr ? "الالتزام بأعلى معايير الجودة العالمية" : "Commitment to the highest international quality standards",
              isAr ? "فريق عمل من نخبة المهندسين والمصممين" : "A team of elite engineers and designers",
              isAr ? "حلول مبتكرة ومستدامة لكل مشروع" : "Innovative and sustainable solutions for every project",
              isAr ? "الشفافية والالتزام بالجداول الزمنية" : "Transparency and commitment to timelines",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <Link
            to="/team"
            className="inline-flex px-8 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-950 transition-all"
          >
            {isAr ? "تعرف على فريقنا" : "Meet Our Team"}
          </Link>
        </div>
      </div>
    </section>
  );
};

const Services = ({ isAr }: { isAr: boolean }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">
            {isAr ? "خدماتنا" : "Our Services"}
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">
            {isAr ? "حلول هندسية متكاملة" : "Integrated Engineering Solutions"}
          </h3>
          <p className="text-slate-600">
            {isAr 
              ? "نقدم مجموعة واسعة من الخدمات الاستشارية التي تغطي كافة مراحل المشروع من الفكرة إلى التنفيذ."
              : "We offer a wide range of consulting services covering all project stages from concept to execution."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{isAr ? service.titleAr : service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isAr ? service.descriptionAr : service.description}
              </p>
              <Link to={`/services/${service.id}`} className="text-emerald-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                {isAr ? "اقرأ المزيد" : "Read More"}
                {isAr ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ isAr }: { isAr: boolean }) => {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">
              {isAr ? "مشاريعنا" : "Our Projects"}
            </h2>
            <h3 className="text-4xl font-bold mb-6">
              {isAr ? "نحول الرؤى إلى واقع ملموس" : "Turning Visions into Tangible Reality"}
            </h3>
          </div>
          <Link to="/projects" className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition-all text-sm font-bold">
            {isAr ? "عرض جميع المشاريع" : "View All Projects"}
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.slice(0, 4).map((project) => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] block"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                  {isAr ? project.categoryAr : project.category}
                </span>
                <h4 className="text-2xl font-bold mb-2">{isAr ? project.titleAr : project.title}</h4>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{isAr ? "عرض المشروع" : "View Project"}</span>
                  {isAr ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ isAr }: { isAr: boolean }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = isAr ? "الاسم مطلوب" : "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = isAr ? "البريد الإلكتروني مطلوب" : "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = isAr ? "البريد الإلكتروني غير صحيح" : "Invalid email format";
    }
    if (!formData.message.trim()) {
      newErrors.message = isAr ? "الرسالة مطلوبة" : "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">
              {isAr ? "اتصل بنا" : "Contact Us"}
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8">
              {isAr ? "دعنا نبدأ مشروعك القادم" : "Let's Start Your Next Project"}
            </h3>
            
            <div className="space-y-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dammam%2C+Saudi+Arabia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{isAr ? "الموقع" : "Location"}</h4>
                  <p className="text-slate-600">{isAr ? "الدمام، المملكة العربية السعودية" : "Dammam, Saudi Arabia"}</p>
                </div>
              </a>
              
              <a href="tel:+966138335851" className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{isAr ? "الهاتف" : "Phone"}</h4>
                  <div className="text-slate-600" dir="ltr">
                    <p>0138335851</p>
                    <p>+966 50 963 4367</p>
                  </div>
                </div>
              </a>
              
              <a href="mailto:Info@reef-consult.com" className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{isAr ? "البريد الإلكتروني" : "Email"}</h4>
                  <p className="text-slate-600">Info@reef-consult.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">
                  {isAr ? "تم الإرسال بنجاح!" : "Sent Successfully!"}
                </h4>
                <p className="text-slate-600 max-w-xs">
                  {isAr 
                    ? "شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن."
                    : "Thank you for contacting us. We will get back to you as soon as possible."}
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-emerald-600 font-bold hover:underline"
                >
                  {isAr ? "إرسال رسالة أخرى" : "Send another message"}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{isAr ? "الاسم" : "Name"}</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-emerald-500'} outline-none transition-all`} 
                    />
                    {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{isAr ? "البريد الإلكتروني" : "Email"}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-emerald-500'} outline-none transition-all`} 
                    />
                    {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{isAr ? "الموضوع" : "Subject"}</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{isAr ? "الرسالة" : "Message"}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-emerald-500'} outline-none transition-all`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message}</p>}
                </div>
                <button 
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      {isAr ? "جاري الإرسال..." : "Sending..."}
                    </>
                  ) : (
                    isAr ? "إرسال الرسالة" : "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home({ isAr }: { isAr: boolean }) {
  return (
    <>
      <Hero isAr={isAr} />
      <About isAr={isAr} />
      <Services isAr={isAr} />
      <Portfolio isAr={isAr} />
    </>
  );
}
