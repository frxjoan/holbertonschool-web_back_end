function countStudents(path) {
  const fs = require('fs');
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data
    .split('\n')
    .filter((line) => line.trim() !== '');

  const students = lines.slice(1);
  const fields = {};

  students.forEach((student) => {
    const studentData = student.split(',');
    const firstName = studentData[0].trim();
    const field = studentData[3].trim();
  
    if (!fields[field]) {
      fields[field] = [];
    }

  fields[field].push(firstName);
});

  console.log(`Number of students: ${students.length}`);

  Object.keys(fields).forEach((field) => {
    const List = fields[field];

    console.log(`Number of students in ${field}: ${List.length}. List: ${List.join(', ')}`);
  });
}

module.exports = countStudents;
