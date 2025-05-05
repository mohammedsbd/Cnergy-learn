"use client";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let savedTheme = localStorage.getItem("theme");

    // Default to light mode if no theme is saved
    if (!savedTheme) {
      savedTheme = "light";
      localStorage.setItem("theme", "light");
    }

    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div className="fixed top-4 mt-3 mr-2 right-4 z-50">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleTheme}
          className="sr-only peer"
        />
        <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-gray-700 transition-colors duration-300" />
        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-transform duration-300" />
      </label>
    </div>
  );
};

export default ThemeToggle;
