import React from "react";

import { Button, Card } from "../components";



const WelcomePage: React.FC = () => {
  return (
    <React.Fragment>
      <div className="content">
        <h1>Buttons</h1>
        <p>Experience dynamic theme switching with a beautifully designed component.</p>
        <Button variant="primary">Label</Button>&nbsp;
        <Button variant="secondary">Label</Button>&nbsp;
        <Button variant="tertiary">Label</Button>&nbsp;
        <Button variant="outline">Label</Button>&nbsp;
        <Button variant="disabled">Label</Button>
      </div>



      <Card />
    </React.Fragment>
  );
};

export default WelcomePage;
