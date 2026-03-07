import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    <img 
      src="/ReefLogo3.png" 
      alt="Reef Logo" 
      className="h-full w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
);

export default function Footer({ isAr }: { isAr: boolean }) {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="h-20" />
              <span className="font-bold text-xl tracking-tight">
                {isAr ? "ريف الأمثل" : "Reef Al-Amthal"}
              </span>
            </div>
            <p className="text-white/50 leading-relaxed">
              {isAr 
                ? "نحن نؤمن بأن الهندسة هي فن تحويل الأفكار إلى واقع مستدام يخدم المجتمع."
                : "We believe that engineering is the art of turning ideas into a sustainable reality that serves society."}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">{isAr ? "روابط سريعة" : "Quick Links"}</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">{isAr ? "الرئيسية" : "Home"}</Link></li>
              <li><a href="/#about" className="hover:text-emerald-400 transition-colors">{isAr ? "من نحن" : "About"}</a></li>
              <li><a href="/#services" className="hover:text-emerald-400 transition-colors">{isAr ? "خدماتنا" : "Services"}</a></li>
              <li><Link to="/projects" className="hover:text-emerald-400 transition-colors">{isAr ? "مشاريعنا" : "Projects"}</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">{isAr ? "اتصل بنا" : "Contact"}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">{isAr ? "خدماتنا" : "Our Services"}</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li>{isAr ? "التصميم المعماري" : "Architectural Design"}</li>
              <li>{isAr ? "الهندسة الإنشائية" : "Structural Engineering"}</li>
              <li>{isAr ? "إدارة المشاريع" : "Project Management"}</li>
              <li>{isAr ? "التصميم الداخلي" : "Interior Design"}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">{isAr ? "النشرة الإخبارية" : "Newsletter"}</h4>
            <p className="text-white/50 text-sm mb-4">{isAr ? "اشترك للحصول على آخر التحديثات." : "Subscribe for the latest updates."}</p>
            <div className="flex gap-2">
              <input type="email" placeholder={isAr ? "بريدك الإلكتروني" : "Your Email"} className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-emerald-500 w-full" />
              <button className="bg-emerald-600 p-2 rounded-lg hover:bg-emerald-700 transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {isAr ? "ريف الأمثل للاستشارات الهندسية. جميع الحقوق محفوظة." : "Reef Al-Amthal Engineering Consulting. All rights reserved."}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{isAr ? "سياسة الخصوصية" : "Privacy Policy"}</a>
            <a href="#" className="hover:text-white transition-colors">{isAr ? "الشروط والأحكام" : "Terms & Conditions"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
