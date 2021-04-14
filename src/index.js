import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';
import { ModeProvider } from './providers/modeProvider';

ReactDOM.render(
  <ModeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ModeProvider>,
  document.getElementById('root')
);
