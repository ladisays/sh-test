import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';

const dest = document.getElementById('root');

if (dest.hasChildNodes()) {
  hydrate(<App />, dest);
} else {
  render(<App />, dest);
}
