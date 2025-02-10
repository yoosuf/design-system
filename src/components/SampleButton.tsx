import React from "react";
import "../assets/styles/components/sample-button.scss";

interface SampleButtonProps {
  variant?: "primary" | "outline" | "disabled";
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
      className={`sample-button ${variant}`}
      onClick={variant !== "disabled" ? onClick : undefined}
    >
      {children}
    </button>
  );
};

export default SampleButton;
