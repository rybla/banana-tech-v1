import React, { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="material-icons-outlined text-3xl text-primary">lunch_dining</span>
            <span className="text-xl font-bold text-gray-800 dark:text-white">Bananatech</span>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full text-gray-600 dark:text-gray-300">
              <span className="material-icons-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button className="p-2 rounded-full text-gray-600 dark:text-gray-300 md:hidden">
              <span className="material-icons-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
