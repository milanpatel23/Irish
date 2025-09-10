import React from 'react';

export const Logo = ({ className = "h-8 w-auto", showText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
          <div className="w-6 h-6 bg-gradient-to-br from-gray-800 to-black rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xs"></div>
          </div>
        </div>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 w-10 h-10 bg-orange-400 rounded-lg blur-md opacity-20 -z-10"></div>
      </div>
      
      {/* Company Name */}
      {showText && (
        <div className="ml-3">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Irish <span className="text-orange-500">Technologies</span>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
            Inc.
          </div>
        </div>
      )}
    </div>
  );
};