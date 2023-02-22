import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'views/Root';
import 'assets/styles/fonts.css';
import AppProviders from 'providers/AppProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>
);
