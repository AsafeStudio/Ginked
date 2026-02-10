
import React from 'react';

interface GlitchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const GlitchButton: React.FC<GlitchButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-bold tracking-[0.2em] text-sm uppercase transition-all duration-300 clip-corner group overflow-hidden";
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    outline: "bg-transparent border border-white/20 text-white hover:border-red-600 hover:bg-red-600"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute top-0 -left-full w-full h-full bg-white/10 group-hover:left-0 transition-all duration-500 skew-x-12"></div>
      
      {/* HUD-like corners for specific aesthetic */}
      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/40 group-hover:border-white transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/40 group-hover:border-white transition-colors"></div>
    </button>
  );
};
