import React from "react";
import SampleButton from "./SampleButton";

import "../assets/styles/components/sample-component.scss";

const SampleComponent: React.FC = () => {
  return (
    <div className="sample-component">
      <div className="content">
        <h1>Welcome to the Future</h1>
        <p>Experience dynamic theme switching with a beautifully designed component.</p>
        <SampleButton>Explore More</SampleButton>

      </div>
    </div>
  );
};

export default SampleComponent;
