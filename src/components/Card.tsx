import React from "react";
import { Button } from "./index";

// import "../assets/styles/components/card.scss";

const Card: React.FC = () => {
  return (
    <div className="sample-component">
      <div className="content">
        <h1>Card Title</h1>
        <p>Experience dynamic theme switching with a beautifully designed component.</p>


        <Button variant="primary">Explore More</Button>

        <Button variant="secondary">Explore More</Button>

      </div>
    </div>
  );
};

export default Card;
