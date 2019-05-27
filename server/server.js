import express from 'express';
import path from 'path';

import * as middlewares from './middlewares';

const PORT = process.env.PORT || 9000;
const app = express();
const router = express.Router();

router.use('^/$', middlewares.renderOnServer);
router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }));

app.use(router);
app.listen(PORT, err => {
  if (err) {
    return console.error('Server could not be started - ', err);
  }

  console.log(`Server is listening on port - ${PORT}...`);
});
