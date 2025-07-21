const fs = require('fs');
function renameFolder(oldName, newName) {
  if (fs.existsSync(oldName)) {
    fs.renameSync(oldName, newName);
    console.log('Folder renamed.');
  } else {
    console.log('Old folder not found.');
  }
}

renameFolder('myFolder2', 'renamedFolder');
