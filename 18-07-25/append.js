// const fs = require('fs');

// function updateFile(filename, newContent) {
//   if (fs.existsSync(filename)) {
//     fs.appendFileSync(filename, '\n' + newContent, 'utf8');
//     console.log(`File '${filename}' updated.`);
//   } else {
//     console.log(`File '${filename}' does not exist.`);
//   }
// }
// updateFile('example.txt', '\nThis is Yash.');


const fs = require('fs');

const [filename, content] = process.argv.slice(2);

if (!filename || !content) process.exit(1);

fs.appendFileSync(filename, content + '\n', 'utf8');
console.log(`Content appended to '${filename}'`);

