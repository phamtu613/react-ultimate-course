// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';

import App from './App.tsx'

// style
import './styles/button.css'
import './styles/index.css'
import AppProvider from './contexts/AppContext.tsx'
import SidebarProvider from './contexts/SidebarContext.tsx'
import { store } from './store.ts';

// BrowserRouter, HashRouter

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <AppProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </AppProvider>
    </Provider>
  </BrowserRouter>
   
  // </StrictMode>,
)
