import { Link } from "react-router-dom";

export default function Footer({ isAr }: { isAr: boolean }) {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer 
      className="relative pt-20 pb-8 overflow-hidden"
      style={{ backgroundColor: "var(--footer-bg)" }}
    >
      {/* Gradient overlay */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)"
        }}
      />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-5 pointer-events-none" style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-5 pointer-events-none" style={{ background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <Logo className="h-16" isAr={isAr} />
            </div>
            <p className="leading-relaxed text-sm" style={{ color: "var(--footer-muted)" }}>
              {isAr
                ? "نحن نؤمن بأن الهندسة هي فن تحويل الأفكار إلى واقع مستدام يخدم المجتمع ويبني المستقبل."
                : "We believe that engineering is the art of turning ideas into a sustainable reality that serves society and builds the future."}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: "var(--footer-bg-light)", 
                    color: "var(--footer-muted)"
                  }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="font-bold mb-6 text-sm uppercase tracking-wider"
              style={{ color: "var(--footer-text)" }}
            >
              {isAr ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {[
                { name: isAr ? "الرئيسية" : "Home", href: "/" },
                { name: isAr ? "من نحن" : "About", href: "/#about" },
                { name: isAr ? "خدماتنا" : "Services", href: "/#services" },
                { name: isAr ? "مشاريعنا" : "Projects", href: "/projects" },
                { name: isAr ? "المدونة" : "Blog", href: "/blog" },
                { name: isAr ? "اتصل بنا" : "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-sm transition-colors duration-300 flex items-center gap-2 group"
                    style={{ color: "var(--footer-muted)" }}
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="font-bold mb-6 text-sm uppercase tracking-wider"
              style={{ color: "var(--footer-text)" }}
            >
              {isAr ? "خدماتنا" : "Our Services"}
            </h4>
            <ul className="space-y-3" style={{ color: "var(--footer-muted)" }}>
              {[
                isAr ? "التصميم المعماري" : "Architectural Design",
                isAr ? "الهندسة الإنشائية" : "Structural Engineering",
                isAr ? "إدارة المشاريع" : "Project Management",
                isAr ? "التصميم الداخلي" : "Interior Design",
                isAr ? "استشارات هندسية" : "Engineering Consultancy",
              ].map((service, index) => (
                <li key={index} className="text-sm">
                  <span className="transition-colors duration-300 hover:text-[var(--accent)] cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="font-bold mb-6 text-sm uppercase tracking-wider"
              style={{ color: "var(--footer-text)" }}
            >
              {isAr ? "معلومات التواصل" : "Contact Info"}
            </h4>
            <ul className="space-y-4" style={{ color: "var(--footer-muted)" }}>
              <li className="flex items-start gap-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: "var(--accent-glow)" }}
                >
                  <Phone size={14} style={{ color: "var(--accent)" }} />
                </div>
                <div className="flex flex-col" dir="ltr">
                  <span className="text-xs font-semibold" style={{ color: "var(--footer-text)" }}>Phone</span>
                  <span className="text-sm">0138335851</span>
                  <span className="text-sm">+966 50 963 4367</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: "var(--accent-glow)" }}
                >
                  <Mail size={14} style={{ color: "var(--accent)" }} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold" style={{ color: "var(--footer-text)" }}>Email</span>
                  <span className="text-sm">Info@reef-consult.com</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: "var(--accent-glow)" }}
                >
                  <MapPin size={14} style={{ color: "var(--accent)" }} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold" style={{ color: "var(--footer-text)" }}>Address</span>
                  <span className="text-sm">
                    {isAr ? "الدمام - حي البديع" : "Dammam - Al-Badeea"}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Registration Info */}
        <div 
          className="py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--footer-border)" }}
        >
          <div 
            className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider"
            style={{ color: "var(--footer-muted)" }}
          >
            <span>
              <span className="font-semibold" style={{ color: "var(--accent)" }}>CR:</span> 7099149712
            </span>
            <span>
              <span className="font-semibold" style={{ color: "var(--accent)" }}>VAT:</span> 331155673920003
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{ 
            color: "rgba(255,255,255,0.4)",
            borderColor: "var(--footer-border)" 
          }}
        >
          <p>
            © {currentYear} {isAr ? "ريف الأمثل للاستشارات الهندسية. جميع الحقوق محفوظة." : "Reef Al-Amthal Engineering Consulting. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <Link 
              to="/privacy-policy" 
              className="transition-colors duration-300 hover:text-[var(--accent)]"
              style={{ color: "var(--footer-muted)" }}
            >
              {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link 
              to="/terms-conditions" 
              className="transition-colors duration-300 hover:text-[var(--accent)]"
              style={{ color: "var(--footer-muted)" }}
            >
              {isAr ? "الشروط والأحكام" : "Terms & Conditions"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

