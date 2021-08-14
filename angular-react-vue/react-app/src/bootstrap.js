import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

ReactDOM.render(
  React.createElement(StrictMode, null, React.createElement(App)),
  document.getElementById('root')
);
