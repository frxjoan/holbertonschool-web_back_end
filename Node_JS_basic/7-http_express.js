const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];
  const output = [];
  const originalLog = console.log;

  console.log = (message) => {
    output.push(message);
  };

  countStudents(database)
    .then(() => {
      console.log = originalLog;
      res.set('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${output.join('\n')}`);
    })
    .catch((error) => {
      console.log = originalLog;
      res.set('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245);

module.exports = app;
