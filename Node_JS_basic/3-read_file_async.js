const fs = require('fs').promises;

async function countStudents(path) {
  let data;
  try {
    data = await fs.readFile(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.trim() !== '');
  if (lines.length === 0) {
    console.log('Number of students: 0');
    return;
  }

  // Remove header
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
  console.log(`Number of students: ${total}`);

  Object.keys(fields)
    .sort()
    .forEach((field) => {
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
    });
}

module.exports = countStudents;
