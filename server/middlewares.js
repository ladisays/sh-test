import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';

import App from '../src/App';

export const renderOnServer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, htmlData) => {
    if (err) {
      console.error('Error reading file... - ', err);
      return res.status(500).send('An error occurred');
    }

    const markup = ReactDOMServer.renderToString(<App />);

    return res.send(htmlData.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
  });
};
