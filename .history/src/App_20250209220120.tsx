import React, { useState } from "react";
import SampleComponent from "./components/SampleComponent";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  // Get initial theme from localStorage or default to light
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="app-container">
      <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
      <SampleComponent />
    </div>
  );
};

export default App;
