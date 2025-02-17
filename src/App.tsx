import React, { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import WelcomePage from "./page/WelcomePage";

const App: React.FC = () => {
  // Get initial theme from localStorage or default to light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // Default to light mode
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Apply theme
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


  return (
    <div className="app-container">
      <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
      <WelcomePage />
    </div>
  );
};

export default App;
