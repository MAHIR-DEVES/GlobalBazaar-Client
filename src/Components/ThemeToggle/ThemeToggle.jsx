import React, { useEffect, useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa6';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Toggle the dark class
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'light';
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      {/* for mobile */}
      <div className="flex lg:hidden">
        <button
          className="p-2  text-black dark:text-white"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <FiSun size={25} /> : <FaMoon size={25} />}
        </button>
      </div>
      <div className="hidden lg:flex">
        <button
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <>
              <p className="flex items-center justify-center gap-3">
                <FiSun size={20} /> Light
              </p>
            </>
          ) : (
            <>
              <p className="flex items-center justify-center gap-3">
                <FaMoon size={20} /> Dark
              </p>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
