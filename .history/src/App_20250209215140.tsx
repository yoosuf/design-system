import React, { useState } from 'react';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <html lang="en" data-theme={theme}>
      <head>
      </head>
      <body>
        <button onClick={toggleTheme}>Switch Theme</button>
        <div className="card">Hello World!</div>
      </body>
    </html>
  );
};

export default App;