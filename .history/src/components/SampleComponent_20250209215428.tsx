import React from "react";
import "../assets/styles/index.scss";

const SampleComponent: React.FC = () => {
  return (
    <div className="sample-component">
      <h1>Hello, Theme Switcher!</h1>
      <p>This text color and background change based on the theme.</p>
    </div>
  );
};

export default SampleComponent;
