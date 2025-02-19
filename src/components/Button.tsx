import React from "react";

interface SampleButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "disabled";
  onClick?: () => void;
  children: React.ReactNode;
  ariaLabel?: string; // Allows adding a custom aria-label for accessibility
}

const SampleButton: React.FC<SampleButtonProps> = ({ 
  variant = "primary", 
  onClick, 
  children,
  ariaLabel
}) => {
  const isDisabled = variant === "disabled";

  return (
    <button 
      className={`button ${isDisabled ? "disabled" : variant}`}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
      role="button"
      aria-disabled={isDisabled}
      aria-label={ariaLabel}
      tabIndex={isDisabled ? -1 : 0}
    >
      {children}
    </button>
  );
};

export default SampleButton;