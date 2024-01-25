const express = require('express');
const helmet = require('helmet');
const { exec } = require('child_process'); 

const app = express();
const port = 3000;

app.disable('x-powered-by');

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/vulnerable', (req, res) => {
  
  const userInput = req.query.input;

  exec(`echo ${userInput}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    res.send(`Command Output: ${stdout}`);
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

module.exports = app;

