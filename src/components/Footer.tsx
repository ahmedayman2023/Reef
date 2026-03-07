import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer({ isAr }: { isAr: boolean }) {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <Logo className="h-20" isAr={isAr} />
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
              <li><Link to="/blog" className="hover:text-emerald-400 transition-colors">{isAr ? "المدونة" : "Blog"}</Link></li>
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
            <h4 className="font-bold mb-6">{isAr ? "معلومات التواصل" : "Contact Information"}</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold">{isAr ? "الهاتف:" : "Phone:"}</span>
                <div className="flex flex-col" dir="ltr">
                  <span>0138335851</span>
                  <span>+966 50 963 4367</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold">{isAr ? "البريد:" : "Email:"}</span>
                <span>Info@reef-consult.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">{isAr ? "العنوان:" : "Address:"}</span>
                <span>{isAr ? "الدمام - حي البديع 3752 - شارع الملك عبدالعزيز" : "Dammam - Al-Badeea District 3752 - King Abdulaziz St"}</span>
              </li>
              <li className="pt-2 border-t border-white/5 text-[10px] uppercase tracking-widest">
                {isAr ? "رقم الغرفة التجارية" : "Chamber of Commerce No."}
              </li>
            </ul>
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
