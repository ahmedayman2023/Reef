import { Link } from "react-router-dom";

export default function Footer({ isAr }: { isAr: boolean }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: isAr ? "الخصوصية" : "Privacy", href: "/privacy-policy" },
    { name: isAr ? "خيارات ملفات تعريف الارتباط" : "Cookies options", href: "#" },
    { name: isAr ? "ملفات تعريف الارتباط" : "Cookies", href: "#" },
    { name: isAr ? "الشروط والأحكام" : "Terms and Conditions of Use", href: "/terms-conditions" },
    { name: "RSS News", href: "#" },
    { name: "RSS Products", href: "#" },
    { name: isAr ? "خريطة الموقع" : "Site Map", href: "#" },
  ];

  return (
    <footer 
      className="py-6 px-4"
      style={{ 
        backgroundColor: "#0f1724",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Links Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-6">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-xs uppercase tracking-wider transition-colors duration-300 hover:text-white"
              style={{ color: "#94a3b8" }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div 
          className="text-center pt-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs" style={{ color: "#64748b" }}>
            © {currentYear} {isAr ? "جميع الحقوق محفوظة" : "All rights reserved"} | Reef Al-Amthal
          </p>
        </div>
      </div>
    </footer>
  );
}

