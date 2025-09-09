'use client';

import { useState, useEffect } from 'react';
import { UpOutlined } from '@ant-design/icons';

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Update scroll progress and visibility
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    setScrollProgress(scrollPercent);
    setIsVisible(scrollTop > 100); // Show after scrolling 100px
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    // Update on page load
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    setIsAnimating(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Reset animation state after scroll completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative w-16 h-16">
            {/* Background circle */}
            <svg
              className="w-16 h-16 transform -rotate-90 absolute inset-0"
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
                stroke="url(#scrollGradient)"
                strokeWidth="3"
                strokeDasharray={`${scrollProgress}, 100`}
                strokeLinecap="round"
                className="transition-all duration-300 ease-out"
              />
              <defs>
                <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="50%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>
            </svg>

            {/* Clickable button overlay */}
            <button
              onClick={scrollToTop}
              className={`
                group absolute inset-0 flex items-center justify-center
                w-16 h-16 rounded-full
                bg-gradient-to-r from-blue-600/80 to-purple-600/80
                hover:from-blue-700 hover:to-purple-700
                text-white shadow-lg
                transition-all duration-300 ease-in-out
                hover:shadow-xl hover:scale-110
                focus:outline-none focus:ring-4 focus:ring-blue-300
                ${isAnimating ? 'animate-pulse' : ''}
              `}
              aria-label={`Scroll to top - ${Math.round(scrollProgress)}% scrolled`}
            >
              {/* Animated background ring */}
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400 animate-spin-slow shadow-yellow-400/50 shadow-lg"></div>

              {/* Inner rotating ring */}
              <div className="absolute inset-1 rounded-full border border-white/30 group-hover:animate-spin"></div>

              {/* Center content */}
              <div className="relative z-10 flex flex-col items-center">
                <UpOutlined className="text-lg transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs font-semibold mt-0.5">{Math.round(scrollProgress)}%</span>
              </div>

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-active:scale-100 transition-transform duration-150"></div>
            </button>

            {/* Moving dot indicator */}
            <div
              className="absolute w-3 h-3 bg-orange-500 rounded-full shadow-lg transition-all duration-300 ease-out border-2 border-white"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${scrollProgress * 3.6}deg) translateY(-26px)`,
                transformOrigin: '50% 50%',
              }}
            />

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Scroll to top ({Math.round(scrollProgress)}%)
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </>
  );
}