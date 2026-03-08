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
  Mail
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
    { icon: Compass, ar: "التصميم المعماري", en: "Architectural Design", pos: "top-5 left-1/2 -translate-x-1/2" },
    { icon: HardHat, ar: "الهندسة الإنشائية", en: "Structural Engineering", pos: "top-20 right-0" },
    { icon: Briefcase, ar: "إدارة المشاريع", en: "Project Management", pos: "bottom-20 right-0" },
    { icon: Lightbulb, ar: "التصميم الداخلي", en: "Interior Design", pos: "bottom-5 left-1/2 -translate-x-1/2" },
    { icon: Globe, ar: "استشارات هندسية", en: "Engineering Consulting", pos: "bottom-20 left-0" },
    { icon: Building2, ar: "إشراف هندسي", en: "Engineering Supervision", pos: "top-20 left-0" },
  ];

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0f2f9f]"></div>
        <div className="absolute inset-0 hero-pattern opacity-16"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(191,219,254,0.16),transparent_44%),radial-gradient(circle_at_78%_38%,rgba(147,197,253,0.1),transparent_42%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f5f]/18 via-[#08153d]/26 to-[#020617]/54"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/18 text-blue-200 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-300/30">
              {isAr ? "التميز في الهندسة" : "Excellence in Engineering"}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              {isAr ? (
                <>نصمم <span className="text-blue-300">المستقبل</span> برؤية هندسية متكاملة</>
              ) : (
                <>Designing the <span className="text-blue-300">Future</span> with Engineering Vision</>
              )}
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              {isAr 
                ? "شركة ريف الأمثل للاستشارات الهندسية تقدم حلولاً مبتكرة وشاملة في مجالات التصميم المعماري والإنشائي وإدارة المشاريع."
                : "Reef Al-Amthal Engineering Consulting provides innovative and comprehensive solutions in architectural and structural design and project management."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2">
                {isAr ? "ابدأ مشروعك" : "Start Your Project"}
                {isAr ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </Link>
              <a href="#about" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-bold transition-all backdrop-blur-sm">
                {isAr ? "اكتشف المزيد" : "Discover More"}
              </a>
            </div>
          </motion.div>

          <div className="hidden lg:flex justify-center">
            <div
              className={`relative w-[460px] h-[460px] select-none touch-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
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
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>
              <div className="absolute inset-10 rounded-full border border-blue-300/25"></div>

              {heroServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.ar}
                    className={`absolute ${service.pos} backdrop-blur-sm border border-white/15 bg-slate-900/55 rounded-full px-3 py-2 text-[11px] text-white/90 flex items-center gap-2 shadow-lg shadow-slate-900/20`}
                    style={{
                      animation: `floatTag ${3.2 + index * 0.25}s ease-in-out ${index * 0.1}s infinite alternate`,
                    }}
                  >
                    <Icon size={13} className="text-blue-300" />
                    <span>{isAr ? service.ar : service.en}</span>
                  </div>
                );
              })}

              <motion.div
                className="absolute left-1/2 top-1/2 w-[280px] h-[280px] -translate-x-1/2 -translate-y-1/2"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateX: rotation.x, rotateY: rotation.y }}
                transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.7 }}
              >
                <div
                  className="absolute left-1/2 top-1/2 w-[300px] h-[300px] rounded-2xl border border-blue-300/20"
                  style={{
                    transform: "translate(-50%, -50%) rotateX(90deg) translateZ(-75px)",
                    background: "linear-gradient(180deg, rgba(148,163,184,0.3) 0%, rgba(15,23,42,0.6) 100%)",
                  }}
                />

                <div className="absolute left-1/2 top-1/2 w-[124px] h-[190px] -translate-x-1/2 -translate-y-1/2" style={{ transformStyle: "preserve-3d" }}>
                  <div className="absolute inset-0 border border-white/30" style={{ transform: "translateZ(62px)", background: "linear-gradient(180deg, rgba(59,130,246,0.78), rgba(37,99,235,0.48))" }} />
                  <div className="absolute inset-0 border border-white/20" style={{ transform: "rotateY(180deg) translateZ(62px)", background: "linear-gradient(180deg, rgba(37,99,235,0.66), rgba(29,78,216,0.36))" }} />
                  <div className="absolute inset-0 border border-white/20" style={{ transform: "rotateY(90deg) translateZ(62px)", background: "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(30,41,59,0.9))" }} />
                  <div className="absolute inset-0 border border-white/20" style={{ transform: "rotateY(-90deg) translateZ(62px)", background: "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(30,41,59,0.9))" }} />
                  <div className="absolute inset-0 border border-white/20" style={{ transform: "rotateX(90deg) translateZ(95px)", background: "linear-gradient(180deg, rgba(125,211,252,0.9), rgba(59,130,246,0.78))" }} />
                </div>

                <div className="absolute left-[46px] top-[110px] w-[68px] h-[106px]" style={{ transformStyle: "preserve-3d" }}>
                  <div className="absolute inset-0 border border-white/25" style={{ transform: "translateZ(34px)", background: "linear-gradient(180deg, rgba(59,130,246,0.7), rgba(37,99,235,0.45))" }} />
                  <div className="absolute inset-0 border border-white/20" style={{ transform: "rotateY(180deg) translateZ(34px)", background: "linear-gradient(180deg, rgba(37,99,235,0.55), rgba(30,64,175,0.35))" }} />
                  <div className="absolute inset-0 border border-white/20" style={{ transform: "rotateY(90deg) translateZ(34px)", background: "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(30,41,59,0.9))" }} />
                  <div className="absolute inset-0 border border-white/20" style={{ transform: "rotateY(-90deg) translateZ(34px)", background: "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(30,41,59,0.9))" }} />
                </div>

                <div className="absolute right-[44px] top-[128px] w-[54px] h-[84px]" style={{ transformStyle: "preserve-3d" }}>
                  <div className="absolute inset-0 border border-white/25" style={{ transform: "translateZ(27px)", background: "linear-gradient(180deg, rgba(14,165,233,0.7), rgba(2,132,199,0.45))" }} />
                  <div className="absolute inset-0 border border-white/20" style={{ transform: "rotateY(180deg) translateZ(27px)", background: "linear-gradient(180deg, rgba(2,132,199,0.55), rgba(3,105,161,0.35))" }} />
                  <div className="absolute inset-0 border border-white/20" style={{ transform: "rotateY(90deg) translateZ(27px)", background: "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(30,41,59,0.9))" }} />
                  <div className="absolute inset-0 border border-white/20" style={{ transform: "rotateY(-90deg) translateZ(27px)", background: "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(30,41,59,0.9))" }} />
                </div>
              </motion.div>

              <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-xs text-white/70 bg-slate-900/60 px-3 py-1 rounded-full border border-white/15">
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

        .hero-pattern {
          background-color: transparent;
          background-image:
            repeating-linear-gradient(45deg, rgba(219, 234, 254, 0.22) 0 20px, transparent 20px 72px),
            repeating-linear-gradient(45deg, rgba(147, 197, 253, 0.18) 0 20px, transparent 20px 72px),
            repeating-linear-gradient(-45deg, rgba(219, 234, 254, 0.2) 0 20px, transparent 20px 72px),
            repeating-linear-gradient(-45deg, rgba(147, 197, 253, 0.16) 0 20px, transparent 20px 72px),
            radial-gradient(120px 120px at 20% 20%, rgba(255,255,255,0.12) 0 2px, transparent 2px),
            radial-gradient(120px 120px at 70% 60%, rgba(255,255,255,0.1) 0 2px, transparent 2px);
          background-size: 560px 560px, 560px 560px, 560px 560px, 560px 560px, 520px 520px, 520px 520px;
          background-position: 0 0, 22px 22px, 0 0, 22px 22px, 0 0, 250px 220px;
          background-repeat: repeat;
          filter: blur(0.2px);
          mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.72));
        }
      `}</style>

      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-xl border-t border-white/10 py-10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
          {[
            { label: isAr ? "مشروع مكتمل" : "Completed Projects", val: "250+" },
            { label: isAr ? "سنوات الخبرة" : "Years of Experience", val: "15+" },
            { label: isAr ? "مهندس خبير" : "Expert Engineers", val: "40+" },
            { label: isAr ? "عميل سعيد" : "Happy Clients", val: "180+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
              <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
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

          <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-950 transition-all">
            {isAr ? "تعرف على فريقنا" : "Meet Our Team"}
          </button>
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
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{isAr ? "الموقع" : "Location"}</h4>
                  <p className="text-slate-600">{isAr ? "الدمام، المملكة العربية السعودية" : "Dammam, Saudi Arabia"}</p>
                </div>
              </div>
              
              <div className="flex gap-6">
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
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{isAr ? "البريد الإلكتروني" : "Email"}</h4>
                  <p className="text-slate-600">Info@reef-consult.com</p>
                </div>
              </div>
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
      <Contact isAr={isAr} />
    </>
  );
}
