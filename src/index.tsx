import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

export const initGA = () => {
  ReactGA.initialize('UA-173566706-1');
};

export const GApageView = (page = '/') => {
  ReactGA.pageview(page);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
