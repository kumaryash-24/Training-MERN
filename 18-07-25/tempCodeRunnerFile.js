const fs = require('fs');

function writeFile(filename, content) {
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`File '${filename}' created.`);
}
writeFile(filename, content); 