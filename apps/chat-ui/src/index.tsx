// Libraries
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// Components
import { App } from 'components/app';

// Styles
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('react-root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
