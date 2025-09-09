'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 50); // Show after scrolling 50px
    };

    // Update on scroll
    window.addEventListener('scroll', updateScrollProgress);

    // Update on page load
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <div className="relative w-16 h-16">
          {/* Background circle */}
          <svg
            className="w-16 h-16 transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
              strokeDasharray="100, 100"
            />
            {/* Progress circle */}
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray={`${scrollProgress}, 100`}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-xs font-semibold">
              {Math.round(scrollProgress)}%
            </div>
          </div>

          {/* Moving dot indicator */}
          <div
            className="absolute w-2 h-2 bg-white rounded-full shadow-lg transition-all duration-300 ease-out"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${scrollProgress * 3.6}deg) translateY(-28px)`,
              transformOrigin: '50% 50%',
            }}
          />
        </div>

        {/* Tooltip */}
        <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Scroll Progress
          <div className="absolute top-0 right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900 transform -translate-y-1"></div>
        </div>
      </div>

      <style jsx>{`
        .scroll-progress-container:hover .tooltip {
          opacity: 1;
        }
      `}</style>
    </>
  );
}