import React, { useEffect, useState } from 'react';

const HelloMessage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center">
      <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <span className="block text-slate-800 dark:text-slate-100 mb-2">Hello World</span>
        <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          DeepX
        </span>
      </h1>
      <p className={`text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-md mx-auto transition-all duration-1000 delay-300 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        Elevating ideas through innovative technology solutions
      </p>
      <div className={`mt-10 transition-all duration-1000 delay-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HelloMessage;