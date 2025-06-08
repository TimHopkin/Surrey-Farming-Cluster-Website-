import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true }) => {
  if (!showText) {
    // Simplified icon version for small spaces
    return (
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Background circle for the icon */}
        <circle cx="40" cy="40" r="35" fill="#2D5016" opacity="0.1"/>
        
        {/* Main wheat stalks in a cluster formation */}
        <g transform="translate(25, 20)">
          {/* Centre wheat stalk */}
          <path d="M15 5 L15 35" stroke="#6B8E23" strokeWidth="2" fill="none"/>
          <ellipse cx="15" cy="8" rx="3" ry="8" fill="#DAA520"/>
          
          {/* Left wheat stalk */}
          <path d="M8 8 L10 35" stroke="#6B8E23" strokeWidth="1.5" fill="none"/>
          <ellipse cx="7" cy="12" rx="2.5" ry="7" fill="#DAA520" transform="rotate(-15 7 12)"/>
          
          {/* Right wheat stalk */}
          <path d="M22 8 L20 35" stroke="#6B8E23" strokeWidth="1.5" fill="none"/>
          <ellipse cx="23" cy="12" rx="2.5" ry="7" fill="#DAA520" transform="rotate(15 23 12)"/>
          
          {/* Far left wheat stalk */}
          <path d="M3 12 L6 35" stroke="#6B8E23" strokeWidth="1" fill="none"/>
          <ellipse cx="2" cy="16" rx="2" ry="6" fill="#DAA520" transform="rotate(-25 2 16)"/>
          
          {/* Far right wheat stalk */}
          <path d="M27 12 L24 35" stroke="#6B8E23" strokeWidth="1" fill="none"/>
          <ellipse cx="28" cy="16" rx="2" ry="6" fill="#DAA520" transform="rotate(25 28 16)"/>
        </g>
        
        {/* Connection dots representing collaboration */}
        <circle cx="25" cy="25" r="2" fill="#4A7C59" opacity="0.6"/>
        <circle cx="35" cy="30" r="1.5" fill="#4A7C59" opacity="0.6"/>
        <circle cx="45" cy="25" r="1.5" fill="#4A7C59" opacity="0.6"/>
        <circle cx="55" cy="30" r="2" fill="#4A7C59" opacity="0.6"/>
        
        {/* Connecting lines */}
        <path d="M27 25 L33 30 M37 30 L43 25 M47 25 L53 30" stroke="#4A7C59" strokeWidth="1" opacity="0.4"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background circle for the icon */}
      <circle cx="40" cy="40" r="35" fill="#2D5016" opacity="0.1"/>
      
      {/* Main wheat stalks in a cluster formation */}
      <g transform="translate(25, 20)">
        {/* Centre wheat stalk */}
        <path d="M15 5 L15 35" stroke="#6B8E23" strokeWidth="2" fill="none"/>
        <ellipse cx="15" cy="8" rx="3" ry="8" fill="#DAA520"/>
        
        {/* Left wheat stalk */}
        <path d="M8 8 L10 35" stroke="#6B8E23" strokeWidth="1.5" fill="none"/>
        <ellipse cx="7" cy="12" rx="2.5" ry="7" fill="#DAA520" transform="rotate(-15 7 12)"/>
        
        {/* Right wheat stalk */}
        <path d="M22 8 L20 35" stroke="#6B8E23" strokeWidth="1.5" fill="none"/>
        <ellipse cx="23" cy="12" rx="2.5" ry="7" fill="#DAA520" transform="rotate(15 23 12)"/>
        
        {/* Far left wheat stalk */}
        <path d="M3 12 L6 35" stroke="#6B8E23" strokeWidth="1" fill="none"/>
        <ellipse cx="2" cy="16" rx="2" ry="6" fill="#DAA520" transform="rotate(-25 2 16)"/>
        
        {/* Far right wheat stalk */}
        <path d="M27 12 L24 35" stroke="#6B8E23" strokeWidth="1" fill="none"/>
        <ellipse cx="28" cy="16" rx="2" ry="6" fill="#DAA520" transform="rotate(25 28 16)"/>
      </g>
      
      {/* Connection dots representing collaboration */}
      <circle cx="25" cy="25" r="2" fill="#4A7C59" opacity="0.6"/>
      <circle cx="35" cy="30" r="1.5" fill="#4A7C59" opacity="0.6"/>
      <circle cx="45" cy="25" r="1.5" fill="#4A7C59" opacity="0.6"/>
      <circle cx="55" cy="30" r="2" fill="#4A7C59" opacity="0.6"/>
      
      {/* Connecting lines */}
      <path d="M27 25 L33 30 M37 30 L43 25 M47 25 L53 30" stroke="#4A7C59" strokeWidth="1" opacity="0.4"/>
      
      {/* Company name */}
      <text x="90" y="30" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#2D5016">
        Surrey Farming
      </text>
      <text x="90" y="50" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#4A7C59">
        Cluster
      </text>
      
      {/* Tagline */}
      <text x="90" y="65" fontFamily="Arial, sans-serif" fontSize="10" fill="#6B8E23" opacity="0.8">
        Growing Together for a Sustainable Surrey
      </text>
    </svg>
  );
};

export default Logo;