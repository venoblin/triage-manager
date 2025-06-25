import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext.jsx'
import { LayoutProvider } from './contexts/LayoutContext.jsx'
import App from './App.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <LayoutProvider>
          <App />
        </LayoutProvider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
)
