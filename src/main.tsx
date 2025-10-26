// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';

import App from './App.tsx'

// style
import './styles/button.css'
import './styles/index.css'
import AppProvider from './contexts/AppContext.tsx'
import SidebarProvider from './contexts/SidebarContext.tsx'

// BrowserRouter, HashRouter

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <AppProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </AppProvider>
  </BrowserRouter>
  // </StrictMode>,
)
