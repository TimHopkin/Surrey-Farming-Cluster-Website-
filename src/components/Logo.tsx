import React from 'react';
import { LogoSVG, BRAND_TEXT } from '../utils/logoAssets';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true }) => {
  if (!showText) {
    // Icon only version using centralized logo
    return (
      <div className={`flex items-center justify-center ${className}`}>
        {LogoSVG.SEEDLING}
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex-shrink-0 w-12 h-12 mr-3">
        {LogoSVG.SEEDLING}
      </div>
      <div className="flex flex-col">
        <span className="font-secondary font-bold text-xl text-gray-900 leading-tight">
          {BRAND_TEXT.FULL_NAME}
        </span>
        <span className="font-primary text-xs text-gray-600 leading-tight">
          {BRAND_TEXT.TAGLINE}
        </span>
      </div>
    </div>
  );
};

export default Logo;