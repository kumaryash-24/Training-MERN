const fs = require('fs');

function createFolder(name) {
  if (!fs.existsSync(name)) {
    fs.mkdirSync(name);
    console.log('Folder created.');
  } else {
    console.log('Folder already exists.');
  }
}

createFolder('myFolder');
createFolder('myFolder2');
