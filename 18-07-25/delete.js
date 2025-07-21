// const fs = require('fs');

// function deleteFile(filename) {
//   if (fs.existsSync(filename)) {
//     fs.unlinkSync(filename);
//     console.log(`File '${filename}' deleted.`);
//   } else {
//     console.log(`File '${filename}' does not exist.`);
//   }
// }

// deleteFile('examplee.txt');


const fs = require('fs');

const filename = process.argv[2];

if (!filename) process.exit(1);

fs.unlinkSync(filename);
console.log(`File '${filename}' deleted successfully.`);
