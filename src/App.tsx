import React from 'react';
import Button from './components/Button';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './components/ThemeProvider';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-container" style={{ 
      padding: '2rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0 }}>Design System</h1>
        <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
      </header>

      <main>
        <section style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <div>
            <h2>Buttons</h2>
            <div style={{ 
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="tertiary">Tertiary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="disabled">Disabled Button</Button>
            </div>
          </div>

          <div>
            <h2>Current Theme: {theme}</h2>
            <p>The design system automatically adjusts colors, shadows, and other properties based on the current theme.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
