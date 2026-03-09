import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { SERVICES, PROJECTS, BLOG_POSTS } from "../constants";

export default function Navbar({ isAr, setIsAr }: { isAr: boolean; setIsAr: (v: boolean) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [closeTimeoutId, setCloseTimeoutId] = useState<number | null>(null);
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
    { key: "home", name: isAr ? "الرئيسية" : "Home", href: isHomePage ? "#home" : "/" },
    { key: "about", name: isAr ? "من نحن" : "About", href: isHomePage ? "#about" : "/#about" },
    { key: "services", name: isAr ? "خدماتنا" : "Services", href: isHomePage ? "#services" : "/#services" },
    { key: "projects", name: isAr ? "مشاريعنا" : "Projects", href: "/projects" },
    { key: "blog", name: isAr ? "المدونة" : "Blog", href: "/blog" },
    { key: "contact", name: isAr ? "اتصل بنا" : "Contact", href: "/contact" },
  ];

  const dropdownItems: Record<string, { name: string; href: string }[]> = {
    about: [
      { name: isAr ? "نبذة عن الشركة" : "Company Overview", href: isHomePage ? "#about" : "/#about" },
      { name: isAr ? "فريقنا" : "Our Team", href: "/team" },
      { name: isAr ? "خدماتنا" : "Our Services", href: isHomePage ? "#services" : "/#services" },
      { name: isAr ? "تواصل معنا" : "Get in Touch", href: "/contact" },
    ],
    services: SERVICES.slice(0, 7).map((service) => ({
      name: isAr ? service.titleAr : service.title,
      href: `/services/${service.id}`,
    })),
    projects: [
      { name: isAr ? "جميع المشاريع" : "All Projects", href: "/projects" },
      ...PROJECTS.slice(0, 3).map((project) => ({
        name: isAr ? project.titleAr : project.title,
        href: `/projects/${project.id}`,
      })),
    ],
    blog: [
      { name: isAr ? "كل المقالات" : "All Articles", href: "/blog" },
      ...BLOG_POSTS.map((post) => ({
        name: isAr ? post.titleAr : post.title,
        href: `/blog/${post.id}`,
      })),
    ],
    contact: [
      { name: isAr ? "نموذج التواصل" : "Contact Form", href: "/contact" },
      { name: isAr ? "سياسة الخصوصية" : "Privacy Policy", href: "/privacy-policy" },
    ],
  };

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#") && isHomePage) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const openDropdown = (key: string) => {
    if (closeTimeoutId) {
      window.clearTimeout(closeTimeoutId);
      setCloseTimeoutId(null);
    }
    setActiveDropdown(key);
  };

  const closeDropdownWithDelay = () => {
    const id = window.setTimeout(() => {
      setActiveDropdown(null);
      setCloseTimeoutId(null);
    }, 180);
    setCloseTimeoutId(id);
  };

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        backgroundColor: isHomePage ? "transparent" : "var(--nav-bg)",
        color: isScrolled || !isHomePage ? "var(--nav-text)" : "var(--nav-on-hero-text)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backdropFilter: !isHomePage ? "blur(6px)" : undefined,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-24 md:h-28" isAr={isAr} tone={isScrolled || !isHomePage ? "blue" : "white"} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            const hasDropdown = Boolean(dropdownItems[link.key]?.length);

            return (
              <div
                key={link.key}
                className="relative"
                onMouseEnter={() => hasDropdown && openDropdown(link.key)}
                onMouseLeave={() => hasDropdown && closeDropdownWithDelay()}
              >
                {link.href.startsWith("#") || (link.href.startsWith("/#") && !isHomePage) ? (
                  <a
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
                    to={link.href}
                    className={`text-sm font-medium transition-colors hover:text-[var(--accent)]`}
                    style={{ color: isScrolled || !isHomePage ? "var(--nav-text)" : "var(--nav-on-hero-text)" }}
                  >
                    {link.name}
                  </Link>
                )}

                {hasDropdown && activeDropdown === link.key && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`absolute top-full min-w-56 pt-2 z-50 ${isAr ? "right-0" : "left-0"}`}
                    onMouseEnter={() => openDropdown(link.key)}
                    onMouseLeave={closeDropdownWithDelay}
                  >
                    <div
                      className="rounded-xl border shadow-xl py-2"
                      style={{
                        backgroundColor: "var(--nav-bg)",
                        borderColor: "rgba(255,255,255,0.08)",
                      }}
                    >
                      {dropdownItems[link.key].map((item) => (
                        <Link
                          key={`${link.key}-${item.href}-${item.name}`}
                          to={item.href}
                          className="block px-4 py-2 text-sm hover:text-[var(--accent)] transition-colors cursor-pointer"
                          style={{ color: "var(--nav-text)" }}
                          onClick={() => {
                            setActiveDropdown(null);
                            if (closeTimeoutId) {
                              window.clearTimeout(closeTimeoutId);
                              setCloseTimeoutId(null);
                            }
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
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
