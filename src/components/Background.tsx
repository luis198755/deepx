import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delay"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
    </div>
  );
};

export default Background;