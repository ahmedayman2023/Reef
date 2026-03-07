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
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-500/30">
            {isAr ? "التميز في الهندسة" : "Excellence in Engineering"}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            {isAr ? (
              <>نصمم <span className="text-emerald-400">المستقبل</span> برؤية هندسية متكاملة</>
            ) : (
              <>Designing the <span className="text-emerald-400">Future</span> with Engineering Vision</>
            )}
          </h1>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            {isAr 
              ? "شركة ريف الأمثل للاستشارات الهندسية تقدم حلولاً مبتكرة وشاملة في مجالات التصميم المعماري والإنشائي وإدارة المشاريع."
              : "Reef Al-Amthal Engineering Consulting provides innovative and comprehensive solutions in architectural and structural design and project management."}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2">
              {isAr ? "ابدأ مشروعك" : "Start Your Project"}
              {isAr ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </Link>
            <a href="#about" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-bold transition-all backdrop-blur-sm">
              {isAr ? "اكتشف المزيد" : "Discover More"}
            </a>
          </div>
        </motion.div>
      </div>

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
              src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1000" 
              alt="Engineering Team" 
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

          <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all">
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
              <Link to="/contact" className="text-emerald-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
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
            <div key={project.id} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
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
                <h4 className="text-2xl font-bold">{isAr ? project.titleAr : project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ isAr }: { isAr: boolean }) => {
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
                  <p className="text-slate-600">{isAr ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{isAr ? "الهاتف" : "Phone"}</h4>
                  <p className="text-slate-600" dir="ltr">+966 50 963 4367</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{isAr ? "البريد الإلكتروني" : "Email"}</h4>
                  <p className="text-slate-600">info@reefalamthal.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{isAr ? "الاسم" : "Name"}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{isAr ? "البريد الإلكتروني" : "Email"}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{isAr ? "الموضوع" : "Subject"}</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{isAr ? "الرسالة" : "Message"}</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"></textarea>
              </div>
              <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition-all shadow-lg shadow-emerald-600/20">
                {isAr ? "إرسال الرسالة" : "Send Message"}
              </button>
            </form>
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
