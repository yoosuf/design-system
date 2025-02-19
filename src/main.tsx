import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/main.scss';
import App from './App.tsx'
import { ThemeProvider } from './components/ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
