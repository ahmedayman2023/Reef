import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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

export default function Navbar({ isAr, setIsAr }: { isAr: boolean; setIsAr: (v: boolean) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: isAr ? "الرئيسية" : "Home", href: isHomePage ? "#home" : "/" },
    { name: isAr ? "من نحن" : "About", href: isHomePage ? "#about" : "/#about" },
    { name: isAr ? "خدماتنا" : "Services", href: isHomePage ? "#services" : "/#services" },
    { name: isAr ? "مشاريعنا" : "Projects", href: "/projects" },
    { name: isAr ? "اتصل بنا" : "Contact", href: "/contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#") && isHomePage) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-20" />
          <span className={`font-bold text-xl tracking-tight ${isScrolled || !isHomePage ? "text-slate-900" : "text-white"}`}>
            {isAr ? "ريف الأمثل" : "Reef Al-Amthal"}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith("#") || (link.href.startsWith("/#") && !isHomePage) ? (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => {
                  if (isHomePage && link.href.startsWith("#")) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }
                }}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled || !isHomePage ? "text-slate-600" : "text-white/90"}`}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled || !isHomePage ? "text-slate-600" : "text-white/90"}`}
              >
                {link.name}
              </Link>
            )
          ))}
          <button 
            onClick={() => setIsAr(!isAr)}
            className={`px-3 py-1 rounded-full border text-xs font-bold transition-all ${isScrolled || !isHomePage ? "border-slate-200 text-slate-600 hover:bg-slate-50" : "border-white/30 text-white hover:bg-white/10"}`}
          >
            {isAr ? "English" : "العربية"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled || !isHomePage ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled || !isHomePage ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            link.href.startsWith("#") || (link.href.startsWith("/#") && !isHomePage) ? (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => {
                  if (isHomePage && link.href.startsWith("#")) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="text-slate-600 font-medium py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 font-medium py-2 border-b border-slate-100"
              >
                {link.name}
              </Link>
            )
          ))}
          <button 
            onClick={() => {
              setIsAr(!isAr);
              setIsMobileMenuOpen(false);
            }}
            className="text-emerald-600 font-bold py-2 text-left"
          >
            {isAr ? "English" : "العربية"}
          </button>
        </motion.div>
      )}
    </nav>
  );
}
