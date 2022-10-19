import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { App } from 'components/App';
import './index.css';
import './assets/fonts/fonts.css';
import { theme } from 'utility/theme';
import GlobalStyle from 'utility/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename="/infinity-wallet/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
