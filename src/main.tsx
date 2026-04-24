import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { SiteProvider } from './context/SiteContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <SiteProvider>
        <App />
      </SiteProvider>
    </HashRouter>
  </StrictMode>,
);
