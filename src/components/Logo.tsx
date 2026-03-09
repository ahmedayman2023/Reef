import { useState } from 'react';

interface LogoProps {
  className?: string;
  isAr?: boolean;
  tone?: "white" | "blue";
}

export default function Logo({ className = "h-12 w-auto", isAr = true, tone = "blue" }: LogoProps) {
  const [error, setError] = useState(false);

  // Fallback if the image fails to load (common on deployment issues)
  if (error) {
    return (
      <div className={`flex items-center ${className}`}>
        <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg">
          R
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://i.im.ge/2026/03/08/egUTAp.ReefLogo3.png" 
        alt="Reef Engineering Logo" 
        className="h-full w-auto object-contain transition-all duration-300"
        style={{
          filter: tone === "white"
            ? "brightness(0) invert(1) drop-shadow(0 0 10px rgba(255,255,255,0.25))"
            : "drop-shadow(0 2px 8px rgba(15,23,42,0.15))",
        }}
        referrerPolicy="no-referrer"
        onError={() => {
          console.error("Logo failed to load from the provided link.");
          setError(true);
        }}
      />
    </div>
  );
}
