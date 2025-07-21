// const fs = require('fs');

// const folderPath = __dirname;

// if (fs.existsSync(folderPath)) {
//   const files = fs.readdirSync(folderPath);
//   console.log("Files in this folder:");
//   files.forEach(file => {
//     console.log(file);
//   });
// } else {
//   console.log("Folder does not exist.");
// }



const fs = require('fs');

const files = fs.readdirSync('.');
console.log('Files in current directory:');
files.forEach(file => console.log(file));
