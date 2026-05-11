const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    res.statusCode = 200;
    const dbFile = process.argv[2];
    let body = 'This is the list of our students\n';

    fs.readFile(dbFile, 'utf8', (err, data) => {
      if (err) {
        body += 'Cannot load the database';
        res.end(body);
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        body += 'Number of students: 0';
        res.end(body);
        return;
      }

      // remove header
      lines.shift();

      const fields = {};
      lines.forEach((line) => {
        const parts = line.split(',').map((p) => p.trim());
        if (parts.length < 4 || parts[0] === '') return;
        const firstname = parts[0];
        const field = parts[3];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      const total = Object.values(fields).reduce((acc, arr) => acc + arr.length, 0);
      body += `Number of students: ${total}\n`;

      Object.keys(fields)
        .sort()
        .forEach((field) => {
          body += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });

      res.end(body.trim());
    });

    return;
  }

  res.statusCode = 404;
  res.end('Not Found');
});

app.listen(1245, 'localhost');

module.exports = app;
