const express = require('express');
const helmet = require('helmet');

const app = express();
const port = 3000;

app.disable('x-powered-by');

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

module.exports = app;

