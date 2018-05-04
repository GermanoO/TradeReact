import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

beforeEach(() => {
  global.sessionStorage = {
    getItem: key => this[key],
    setItem: (key, value) => {
      this[key] = value;
    },
    removeItem: (key) => {
      delete this[key];
    },
  };
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
