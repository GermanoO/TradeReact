import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import { store } from './helpers';
import { App } from './containers/App';

import registerServiceWorker from './registerServiceWorker';

// global style
injectGlobal`
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: sans-serif;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
