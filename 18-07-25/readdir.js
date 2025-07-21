const fs = require('fs');

function listFolder(name) {
  if (fs.existsSync(name)) {
    const files = fs.readdirSync(name);
    console.log('Files in', name + ':', files);
  } else {
    console.log('Folder not found.');
  }
}

listFolder('myFolder');