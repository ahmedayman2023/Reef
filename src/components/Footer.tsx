import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer({ isAr }: { isAr: boolean }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  const quickLinks = [
    { name: isAr ? "الرئيسية" : "Home", href: "/" },
    { name: isAr ? "من نحن" : "About", href: "/#about" },
    { name: isAr ? "خدماتنا" : "Services", href: "/#services" },
    { name: isAr ? "مشاريعنا" : "Projects", href: "/projects" },
    { name: isAr ? "المدونة" : "Blog", href: "/blog" },
    { name: isAr ? "اتصل بنا" : "Contact", href: "/contact" },
  ];

  const services = [
    isAr ? "التصميم المعماري" : "Architectural Design",
    isAr ? "الهندسة الإنشائية" : "Structural Engineering",
    isAr ? "إدارة المشاريع" : "Project Management",
    isAr ? "التصميم الداخلي" : "Interior Design",
    isAr ? "استشارات هندسية" : "Engineering Consultancy",
    isAr ? "إشرافConstruction" : "Construction Supervision",
  ];

  return (
    <footer 
      className="bg-[#0a1628] text-white pt-16 pb-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <Logo className="h-16" isAr={isAr} />
            <p className="text-gray-400 text-sm leading-relaxed">
              {isAr
                ? "شركة ريف الأمثل للاستشارات الهندسية - شركتكم الموثوقة لاستشارات الهندسة المهنية في المملكة العربية السعودية."
                : "Reef Al-Amthal Engineering Consulting - Your trusted partner for professional engineering consulting services in Saudi Arabia."}
            </p>
            
            {/* Social Media Icons - Rounded Square */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-[#1a2a42] flex items-center justify-center transition-all duration-300 hover:bg-emerald-600 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">
              {isAr ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">
              {isAr ? "خدماتنا" : "Our Services"}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm cursor-pointer hover:text-emerald-400 transition-colors duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">
              {isAr ? "معلومات التواصل" : "Contact Info"}
            </h3>
            <ul className="space-y-4">
              {/* Phone */}
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1a2a42] flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">{isAr ? "الهاتف" : "Phone"}</span>
                  <a href="tel:0138335851" className="text-white text-sm hover:text-emerald-400 transition-colors">
                    013 833 5851
                  </a>
                  <a href="tel:+966509634367" className="text-white text-sm hover:text-emerald-400 transition-colors">
                    +966 50 963 4367
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1a2a42] flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">{isAr ? "البريد الإلكتروني" : "Email"}</span>
                  <a href="mailto:Info@reef-consult.com" className="text-white text-sm hover:text-emerald-400 transition-colors">
                    Info@reef-consult.com
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1a2a42] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">{isAr ? "العنوان" : "Address"}</span>
                  <span className="text-white text-sm">
                    {isAr ? "الدمام - حي البديع" : "Dammam, Al-Badeea"}
                  </span>
                  <span className="text-white text-sm">
                    {isAr ? "المملكة العربية السعودية" : "Kingdom of Saudi Arabia"}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* VAT and CR Numbers */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span>
              <span className="text-emerald-400 font-semibold">CR:</span>{" "}
              <span className="text-gray-400">7099149712</span>
            </span>
            <span>
              <span className="text-emerald-400 font-semibold">VAT:</span>{" "}
              <span className="text-gray-400">331155673920003</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear}{" "}
              {isAr 
                ? "جميع الحقوق محفوظة - Reef Al-Amthal" 
                : "All Rights Reserved - Reef Al-Amthal"}
            </p>
          </div>

          {/* Privacy Policy & Terms */}
          <div className="flex gap-6">
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300"
            >
              {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link 
              to="/terms-conditions" 
              className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300"
            >
              {isAr ? "الشروط والأحكام" : "Terms & Conditions"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

