import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  isAr?: boolean;
}

export default function Logo({ className = "h-12 w-auto", isAr = true }: LogoProps) {
  const [error, setError] = useState(false);

  // Fallback if the image fails to load (common on deployment issues)
  if (error) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          R
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
          {isAr ? "ريف" : "Reef"}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/ReefLogo3.png" 
        alt="Reef Engineering Logo" 
        className="h-full w-auto object-contain"
        referrerPolicy="no-referrer"
        onError={() => {
          console.error("Logo failed to load at /ReefLogo3.png. Ensure the file exists in the public folder with exact casing.");
          setError(true);
        }}
      />
    </div>
  );
}
