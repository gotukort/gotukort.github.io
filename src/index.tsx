import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ReactGA from 'react-ga';
import './i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#005a9c',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#9a9a9a',
    },
  },
});

export const initGA = () => {
  ReactGA.initialize('UA-173566706-1');
};

export const GApageView = (page = '/') => {
  ReactGA.pageview(page);
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
