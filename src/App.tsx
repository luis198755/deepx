import React from 'react';
import Header from './components/Header';
import Background from './components/Background';
import HelloMessage from './components/HelloMessage';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-300">
      <Background />
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center">
        <HelloMessage />
      </main>
      <footer className="w-full py-4 text-center text-slate-500 dark:text-slate-400">
        <p className="text-sm">© 2025 DeepX. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;