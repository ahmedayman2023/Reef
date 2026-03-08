import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar({ isAr, setIsAr }: { isAr: boolean; setIsAr: (v: boolean) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return document.documentElement.classList.contains("dark");
    } catch {
      return false;
    }
  });
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch {
      // ignore
    }
  }, [isDark]);

  const navLinks = [
    { name: isAr ? "الرئيسية" : "Home", href: isHomePage ? "#home" : "/" },
    { name: isAr ? "من نحن" : "About", href: isHomePage ? "#about" : "/#about" },
    { name: isAr ? "خدماتنا" : "Services", href: isHomePage ? "#services" : "/#services" },
    { name: isAr ? "مشاريعنا" : "Projects", href: "/projects" },
    { name: isAr ? "المدونة" : "Blog", href: "/blog" },
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

  const isScrolledOrNotHome = isScrolled || !isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      style={{
        backgroundColor: isScrolledOrNotHome ? "var(--nav-bg)" : "transparent",
        color: isScrolledOrNotHome ? "var(--nav-text)" : "var(--nav-on-hero-text)",
        paddingTop: isScrolledOrNotHome ? "0.75rem" : "1.25rem",
        paddingBottom: isScrolledOrNotHome ? "0.75rem" : "1.25rem",
      }}
    >
      {/* Gradient border at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
          opacity: isScrolledOrNotHome ? 0.6 : 0
        }}
      />

      {/* Shadow on scroll */}
      {isScrolledOrNotHome && (
        <div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <Logo className="h-16 sm:h-20" isAr={isAr} />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link, index) => (
            <div key={link.name} className="relative group">
              {link.href.startsWith("#") || (link.href.startsWith("/#") && !isHomePage) ? (
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (isHomePage && link.href.startsWith("#")) {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }
                  }}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg nav-link-underline`}
                  style={{ 
                    color: isScrolledOrNotHome ? "var(--nav-text)" : "var(--nav-on-hero-text)"
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                </a>
              ) : (
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg nav-link-underline`}
                  style={{ 
                    color: isScrolledOrNotHome ? "var(--nav-text)" : "var(--nav-on-hero-text)"
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              )}
            </div>
          ))}

          {/* Divider */}
          <div 
            className="w-px h-6 mx-2" 
            style={{ backgroundColor: isScrolledOrNotHome ? "var(--nav-border)" : "rgba(255,255,255,0.2)" }}
          />

          {/* Language Toggle */}
          <button
            onClick={() => setIsAr(!isAr)}
            className="px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: isScrolledOrNotHome ? "var(--bg-secondary)" : "rgba(255,255,255,0.1)",
              color: isScrolledOrNotHome ? "var(--nav-text)" : "var(--nav-on-hero-text)",
              border: `1px solid ${isScrolledOrNotHome ? "var(--nav-border)" : "rgba(255,255,255,0.2)"}`
            }}
          >
            {isAr ? "EN" : "عربي"}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: isScrolledOrNotHome ? "var(--bg-secondary)" : "rgba(255,255,255,0.1)",
              color: isScrolledOrNotHome ? "var(--nav-text)" : "var(--nav-on-hero-text)",
              border: `1px solid ${isScrolledOrNotHome ? "var(--nav-border)" : "rgba(255,255,255,0.2)"}`
            }}
          >
            <motion.div
              key={isDark ? "sun" : "moon"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all"
          style={{
            backgroundColor: isScrolledOrNotHome ? "var(--bg-secondary)" : "rgba(255,255,255,0.1)",
            color: isScrolledOrNotHome ? "var(--nav-text)" : "var(--nav-on-hero-text)",
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ 
              backgroundColor: "var(--nav-bg-solid)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)"
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.href.startsWith("#") || (link.href.startsWith("/#") && !isHomePage) ? (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (isHomePage && link.href.startsWith("#")) {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      className="block py-3 px-4 text-sm font-medium rounded-lg transition-colors"
                      style={{ color: "var(--nav-text)" }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 text-sm font-medium rounded-lg transition-colors"
                      style={{ color: "var(--nav-text)" }}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile Controls */}
              <motion.div 
                className="flex gap-3 pt-4 border-t"
                style={{ borderColor: "var(--nav-border)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <button
                  onClick={() => {
                    setIsAr(!isAr);
                  }}
                  className="flex-1 py-3 rounded-lg text-sm font-bold text-center transition-all"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "white"
                  }}
                >
                  {isAr ? "English" : "العربية"}
                </button>

                <button
                  onClick={() => {
                    setIsDark(!isDark);
                  }}
                  className="w-14 h-12 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--nav-text)",
                    border: "1px solid var(--nav-border)"
                  }}
                >
                  <motion.div
                    key={isDark ? "mobile-sun" : "mobile-moon"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDark ? (
                      <Sun className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                  </motion.div>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

