import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        backgroundColor: isScrolled || !isHomePage ? "var(--nav-bg)" : "transparent",
        color: isScrolled || !isHomePage ? "var(--nav-text)" : "var(--nav-on-hero-text)",
        paddingTop: isScrolled || !isHomePage ? "1rem" : "1.5rem",
        paddingBottom: isScrolled || !isHomePage ? "1rem" : "1.5rem",
        backdropFilter: isScrolled || !isHomePage ? "blur(6px)" : undefined,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-20" isAr={isAr} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
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
                className={`text-sm font-medium transition-colors hover:text-[var(--accent)]`}
                style={{ color: isScrolled || !isHomePage ? "var(--nav-text)" : "var(--nav-on-hero-text)" }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--accent)]`}
                style={{ color: isScrolled || !isHomePage ? "var(--nav-text)" : "var(--nav-on-hero-text)" }}
              >
                {link.name}
              </Link>
            )
          ))}
          <button
            onClick={() => setIsAr(!isAr)}
            className={`px-3 py-1 rounded-full border text-xs font-bold transition-all`}
            style={{
              borderColor: isScrolled || !isHomePage ? "rgba(15,23,36,0.06)" : "rgba(255,255,255,0.18)",
              color: isScrolled || !isHomePage ? "var(--nav-text)" : "var(--nav-on-hero-text)",
            }}
          >
            {isAr ? "English" : "العربية"}
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="px-3 py-1 rounded-full border text-xs font-bold transition-all"
            style={{
              borderColor: isScrolled || !isHomePage ? "rgba(15,23,36,0.06)" : "rgba(255,255,255,0.18)",
              color: isScrolled || !isHomePage ? "var(--nav-text)" : "var(--nav-on-hero-text)",
            }}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: isScrolled || !isHomePage ? "var(--nav-text)" : "var(--nav-on-hero-text)" }}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 shadow-xl p-6 flex flex-col gap-4 md:hidden"
          style={{ backgroundColor: "var(--nav-bg)", color: "var(--nav-text)" }}
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
                className="font-medium py-2 border-b"
                style={{ color: "var(--nav-text)", borderColor: "rgba(255,255,255,0.06)" }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium py-2 border-b"
                style={{ color: "var(--nav-text)", borderColor: "rgba(255,255,255,0.06)" }}
              >
                {link.name}
              </Link>
            )
          ))}
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => {
                setIsAr(!isAr);
                setIsMobileMenuOpen(false);
              }}
              className="font-bold py-2"
              style={{ color: "var(--accent)" }}
            >
              {isAr ? "English" : "العربية"}
            </button>

            <button
              onClick={() => {
                setIsDark(!isDark);
                setIsMobileMenuOpen(false);
              }}
              className="font-bold py-2"
              style={{ color: "var(--nav-text)" }}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
