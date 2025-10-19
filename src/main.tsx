// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

// style
import './styles/button.css'
import './styles/index.css'
import AppProvider from './contexts/AppContext.tsx'
import SidebarProvider from './contexts/SidebarContext.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <AppProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </AppProvider>
  // </StrictMode>,
)
