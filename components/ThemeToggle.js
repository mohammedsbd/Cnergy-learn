"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
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
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="fixed mb-5 ml-4 top-4 right-4 z-50 bg-transparent text-gray-800 dark:text-white p-2 rounded-full transition duration-200 ease-in-out"
      style={{
        maxWidth: "60px", // Increased max width
        maxHeight: "60px", // Increased max height
        right: "20px", // Adjust the button's right margin
        top: "20px", // Adjust the button's top margin
      }}
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}{" "}
      {/* Increased icon size */}
    </button>
  );
};

export default ThemeToggle;
