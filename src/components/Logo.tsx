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
      <div className={`flex items-center ${className}`}>
        <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg">
          R
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/ReefLogo.png" 
        alt="Reef Engineering Logo" 
        className="h-full w-auto object-contain"
        referrerPolicy="no-referrer"
        onError={() => {
          console.error("Logo failed to load at /ReefLogo.png. Ensure the file exists in the public folder with exact casing.");
          setError(true);
        }}
      />
    </div>
  );
}
