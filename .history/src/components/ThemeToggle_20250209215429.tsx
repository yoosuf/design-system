import React from "react";

interface ThemeToggleProps {
  toggleTheme: () => void;
  currentTheme: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, currentTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      Switch to {currentTheme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
