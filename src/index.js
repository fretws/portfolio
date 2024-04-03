import React from 'react';
import ReactDOM from 'react-dom/client';
/*
 * The order of imports here is important -- to preserve custom styles, ensure
 * that bootstrap is imported before all other styling imports. To ensure
 * constants are available for custom css files to use, ensure these are
 * imported before any custom style sheets.
 */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './theme/constants/colors.css'
import './theme/constants/layout.css'
import './theme/constants/text.css'
import './theme/colors.css'
import './theme/text.css'
import './index.css';
import './pages/page.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
