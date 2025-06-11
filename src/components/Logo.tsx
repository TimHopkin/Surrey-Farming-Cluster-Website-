import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true }) => {
  if (!showText) {
    // Icon only version using seedling icon
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <i className="fas fa-seedling text-cluster-green text-2xl"></i>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <i className="fas fa-seedling text-cluster-green text-2xl mr-3"></i>
      <div className="flex flex-col">
        <span className="font-secondary font-bold text-xl text-gray-900 leading-tight">
          Surrey Farming Cluster
        </span>
        <span className="font-primary text-xs text-gray-600 leading-tight">
          Growing Together for a Sustainable Surrey
        </span>
      </div>
    </div>
  );
};

export default Logo;