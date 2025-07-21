// const fs = require('fs');

// function writeFile(filename, content) {
//   fs.writeFileSync(filename, content, 'utf8');
//   console.log(`File '${filename}' created.`);
// }
// writeFile('example1.txt', 'This is my first file.');


const fs = require('fs');

const filename = process.argv[2];
const content = process.argv[3];

if (!filename || !content) process.exit(1);

fs.writeFileSync(filename, content, 'utf8');
console.log(`File '${filename}' created successfully.`);
