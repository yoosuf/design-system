import React from "react";
import "../assets/styles/components/button.scss";

interface SampleButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "disabled";
  onClick?: () => void;
  children: React.ReactNode;
}

const SampleButton: React.FC<SampleButtonProps> = ({ 
  variant = "primary", 
  onClick, 
  children 
}) => {
  return (
    <button 
      className={`button ${variant}`}
      onClick={variant !== "disabled" ? onClick : undefined}
    >
      {children}
    </button>
  );
};

export default SampleButton;
