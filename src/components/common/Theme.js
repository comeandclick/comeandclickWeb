import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Initialize as true for dark mode by default

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    
    // If no saved theme, set dark mode as default
    if (!savedTheme) {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div
      className={`tt-style-switch ${isDarkMode ? "index-dark" : ""}`}
      onClick={toggleTheme}
    >
      <i
        className={`bi ${
          isDarkMode ? "bi-moon-fill" : " bi-brightness-low-fill"
        }`}
      />
    </div>
  );
};

export default ThemeSwitch;
