const fs = require('fs');
function deleteFolder(name) {
  if (fs.existsSync(name)) {
    fs.rmdirSync(name);
    console.log('Folder deleted.');
  } else {
    console.log('Folder not found.');
  }
}

deleteFolder('myFolder2');
