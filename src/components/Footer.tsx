import { Link } from "react-router-dom";

export default function Footer({ isAr }: { isAr: boolean }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Privacy", key: "privacy" },
    { name: "Cookies options", key: "cookiesOptions" },
    { name: "Cookies", key: "cookies" },
    { name: "Terms and Conditions of Use", key: "terms" },
    { name: "RSS News", key: "rssNews" },
    { name: "RSS Products", key: "rssProducts" },
    { name: "Site Map", key: "siteMap" },
  ];

  const getLink = (key: string): string => {
    const links: Record<string, string> = {
      privacy: "/privacy-policy",
      terms: "/terms-conditions",
    };
    return links[key] || "#";
  };

  return (
    <footer 
      className="py-5 px-4"
      style={{ 
        backgroundColor: "#0f1724",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Links Row - Single Line */}
        <div 
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 mb-4"
          style={{ 
            padding: "0.75rem 0"
          }}
        >
          {footerLinks.map((link, index) => (
            <Link
              key={link.key}
              to={getLink(link.key)}
              className="text-xs font-normal tracking-wide transition-colors duration-200 hover:text-white whitespace-nowrap"
              style={{ 
                color: "#cbd5e1",
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div 
          className="h-px w-full mb-4"
          style={{ 
            backgroundColor: "rgba(255,255,255,0.1)" 
          }}
        />

        {/* Copyright */}
        <div className="text-center">
          <p 
            className="text-xs"
            style={{ 
              color: "#94a3b8",
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
            }}
          >
            © {currentYear} Reef Al-Amthal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

