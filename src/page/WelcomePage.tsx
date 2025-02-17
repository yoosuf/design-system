import React from "react";

import { Button, Card } from "../components";



const WelcomePage: React.FC = () => {
  return (
    <React.Fragment>
      <div className="content">
        <h1>Buttons</h1>
        <p>Experience dynamic theme switching with a beautifully designed component.</p>
        <Button variant="primary">Explore More</Button>
        <Button variant="secondary">Explore More</Button>
        <Button variant="tertiary">Explore More</Button>
        <Button variant="outline">Explore More</Button>
        <Button variant="disabled">Explore More</Button>
      </div>



      <Card />
    </React.Fragment>
  );
};

export default WelcomePage;
