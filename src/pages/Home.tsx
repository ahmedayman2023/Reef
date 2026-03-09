import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Leaf
} from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES, PROJECTS } from "../constants";

const Hero = ({ isAr }: { isAr: boolean }) => {
  const heroSlides = [
    {
      titleAr: "الـتصميم الـمعـماري",
      titleEn: "Architectural Design",
      descriptionAr:
        "نساعد عملاءنا في تقديم حلول مخصصة لأهم تحديات البنية التحتية الحالية، بما في ذلك التكامل الرقمي، إدارة الأصول، وتمويل المشاريع لتحقيق قيمة مستدامة.",
      descriptionEn:
        "We help our clients deliver tailored solutions for key infrastructure challenges, including digital integration, asset management, and project finance for lasting value.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
      learnMoreTo: "/services/1",
      expertiseTo: "/projects",
      tabAr: "التصميم المعماري",
      tabEn: "Architectural Design",
    },
    {
      titleAr: "التصميم الإنشائي",
      titleEn: "Structural Design",
      descriptionAr:
        "نقدم حلولاً إنشائية آمنة ومبتكرة تضمن استدامة وسلامة المباني، مع التركيز على كفاءة استخدام المواد وتقليل التكاليف الإنشائية.",
      descriptionEn:
        "We provide safe and innovative structural solutions that ensure building sustainability and safety, focusing on material efficiency and reducing construction costs.",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=2000",
      learnMoreTo: "/services/2",
      expertiseTo: "/projects",
      tabAr: "التصميم الإنشائي",
      tabEn: "Structural Design",
    },
    {
      titleAr: "الإشراف وإدارة الإنشاءات",
      titleEn: "Supervision & Construction Management",
      descriptionAr:
        "نضمن تنفيذ المشروع وفق أعلى معايير الجودة والسلامة والالتزام بالجداول الزمنية، من خلال إدارة فعالة للموقع وتنسيق دقيق بين جميع الأطراف.",
      descriptionEn:
        "We ensure project delivery with top quality, safety, and schedule compliance through effective site management and precise coordination between stakeholders.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000",
      learnMoreTo: "/services/6",
      expertiseTo: "/projects",
      tabAr: "الإشراف وإدارة الإنشاءات",
      tabEn: "Supervision & Construction",
    },
    {
      titleAr: "التصميم الداخلي",
      titleEn: "Interior Design",
      descriptionAr:
        "نصمم مساحات داخلية ملهمة تجمع بين الجمال والوظيفة، مع الاهتمام بأدق التفاصيل لتعكس هوية العميل وتوفر بيئة مريحة.",
      descriptionEn:
        "We design inspiring interior spaces that combine beauty and function, with attention to the finest details to reflect the client's identity and provide a comfortable environment.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000",
      learnMoreTo: "/services/3",
      expertiseTo: "/projects",
      tabAr: "التصميم الداخلي",
      tabEn: "Interior Design",
    },
    {
      titleAr: "الاستشارات البيئية",
      titleEn: "Environmental Consultation",
      descriptionAr:
        "تساعد خدمات الاستشارات البيئية لدينا العملاء على التنقل في اللوائح البيئية المعقدة مع تنفيذ ممارسات مستدامة لضمان أن تكون المشاريع مسؤولة بيئياً.",
      descriptionEn:
        "Our environmental consultation services help clients navigate complex environmental regulations while implementing sustainable practices to ensure projects are environmentally responsible.",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=2000",
      learnMoreTo: "/services/7",
      expertiseTo: "/projects",
      tabAr: "الاستشارات البيئية",
      tabEn: "Environmental Consultation",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  const currentSlide = heroSlides[activeSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 z-0 bg-slate-950">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.titleAr}
            className={`absolute inset-0 transition-opacity duration-700 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt={isAr ? slide.titleAr : slide.titleEn}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-950/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-slate-900/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-transparent to-slate-950/40" />
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-28 min-h-screen flex items-center">
        <div className={`w-full max-w-2xl ${isAr ? "mr-auto text-right" : "ml-auto text-left"}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1d4ed8] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            {isAr ? currentSlide.titleAr : currentSlide.titleEn}
          </h1>
          <p className="text-lg sm:text-2xl text-white/95 leading-relaxed mb-8 max-w-2xl">
            {isAr ? currentSlide.descriptionAr : currentSlide.descriptionEn}
          </p>

          <div className={`flex flex-wrap gap-4 ${isAr ? "justify-start" : "justify-start"}`}>
            <Link
              to={currentSlide.learnMoreTo}
              className="px-8 py-3 rounded-md bg-[#1d4ed8] text-white font-bold text-lg hover:bg-[#1e40af] transition-colors"
            >
              {isAr ? "تعرّف على المزيد" : "Learn More"}
            </Link>
            <Link
              to={currentSlide.expertiseTo}
              className="px-8 py-3 rounded-md border border-[#1d4ed8] text-[#1d4ed8] font-bold text-lg hover:bg-[#1d4ed8]/10 transition-colors"
            >
              {isAr ? "خبراتنا" : "Our Expertise"}
            </Link>
            </div>
          </div>
        </div>

      <div className="absolute inset-x-0 bottom-8 z-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-5 gap-4 ${isAr ? "direction-rtl" : ""}`}>
            {heroSlides.map((slide, index) => {
              const isActive = index === activeSlide;

              return (
                <button
                  key={slide.titleAr}
                  onClick={() => setActiveSlide(index)}
                  className={`text-${isAr ? "right" : "left"} border-t pt-3 transition-colors ${
                    isActive
                      ? "border-[#1d4ed8] text-[#1d4ed8]"
                      : "border-white/70 text-white/85 hover:text-white"
                  }`}
                  aria-label={isAr ? slide.tabAr : slide.tabEn}
                >
                  <div className="text-3xl sm:text-4xl leading-none mb-2 opacity-85">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-base sm:text-[1.55rem] font-semibold leading-tight">
                    {isAr ? slide.tabAr : slide.tabEn}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
        <p className="text-[11px] sm:text-xs tracking-[0.25em] text-cyan-50/80 uppercase">
          {isAr ? "حلول هندسية متكاملة" : "Integrated Engineering Solutions"}
        </p>
        <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-white/95">
          {isAr ? "ريف الأمثل للاستشارات الهندسية" : "Reef Al-Amthal Engineering Consulting"}
        </h2>
      </div>

      <style>{`
        .direction-rtl {
          direction: rtl;
        }
      `}</style>
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
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
              alt="" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-primary-700 text-white p-8 rounded-2xl shadow-xl hidden md:block">
            <div className="text-4xl font-bold mb-1">27+</div>
            <div className="text-sm opacity-80 uppercase tracking-widest">{isAr ? "عاماً من التميز" : "Years of Excellence"}</div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-primary-700 uppercase tracking-widest mb-4">
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
                <CheckCircle2 className="text-primary-600 shrink-0" size={20} />
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
          <h2 className="text-sm font-bold text-primary-700 uppercase tracking-widest mb-4">
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
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary-700 mb-6 shadow-sm group-hover:bg-primary-700 group-hover:text-white transition-all">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{isAr ? service.titleAr : service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isAr ? service.descriptionAr : service.description}
              </p>
              <Link to={`/services/${service.id}`} className="text-primary-700 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
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

const EnvironmentalConsulting = ({ isAr }: { isAr: boolean }) => {
  const environmentalService = SERVICES.find((service) => service.id === 7);

  if (!environmentalService) return null;

  return (
    <section id="environmental-consulting" className="py-24 bg-primary-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-widest">
              <Leaf size={14} />
              {isAr ? "الاستشارات البيئية" : "Environmental Consultation"}
            </span>

            <h3 className="text-4xl font-bold text-slate-900 leading-tight">
              {isAr ? "نبني مشاريع أكثر استدامة وأثرًا إيجابيًا" : "Build Sustainable Projects with Measurable Impact"}
            </h3>

            <p className="text-slate-600 leading-relaxed text-lg">
              {isAr ? environmentalService.longDescriptionAr : environmentalService.longDescription}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {(isAr ? environmentalService.benefitsAr : environmentalService.benefits).slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-primary-100">
                  <CheckCircle2 size={18} className="text-primary-700 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <Link
              to="/services/7"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-bold transition-all"
            >
              {isAr ? "اكتشف الخدمة" : "Explore Service"}
              {isAr ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={environmentalService.image}
              alt={isAr ? environmentalService.titleAr : environmentalService.title}
              className="w-full h-[420px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h4 className="text-2xl font-bold mb-2">{isAr ? environmentalService.titleAr : environmentalService.title}</h4>
              <p className="text-white/85 leading-relaxed">{isAr ? environmentalService.descriptionAr : environmentalService.description}</p>
            </div>
          </motion.div>
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
            <h2 className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-4">
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
                <span className="text-primary-500 text-xs font-bold uppercase tracking-widest mb-2 block">
                  {isAr ? project.categoryAr : project.category}
                </span>
                <h4 className="text-2xl font-bold mb-2">{isAr ? project.titleAr : project.title}</h4>
                <div className="flex items-center gap-2 text-primary-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
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
            <h2 className="text-sm font-bold text-primary-700 uppercase tracking-widest mb-4">
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
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{isAr ? "الموقع" : "Location"}</h4>
                  <p className="text-slate-600">{isAr ? "الدمام، المملكة العربية السعودية" : "Dammam, Saudi Arabia"}</p>
                </div>
              </a>
              
              <a href="tel:+966138335851" className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
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
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
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
                <div className="w-20 h-20 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center">
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
                  className="text-primary-700 font-bold hover:underline"
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
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-primary-600'} outline-none transition-all`} 
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
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-primary-600'} outline-none transition-all`} 
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-600 outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{isAr ? "الرسالة" : "Message"}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-primary-600'} outline-none transition-all`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message}</p>}
                </div>
                <button 
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-bold transition-all shadow-lg shadow-primary-700/20 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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
      <EnvironmentalConsulting isAr={isAr} />
      <Portfolio isAr={isAr} />
    </>
  );
}
