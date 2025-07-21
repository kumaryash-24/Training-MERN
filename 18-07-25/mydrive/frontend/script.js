const API = "http://localhost:3000";

const driveList = document.getElementById("driveList");
const statusBox = document.getElementById("status");

function showStatus(message) {
  statusBox.textContent = message;
  loadDriveItems();
}

function createFolder() {
  const folderName = document.getElementById("folderName").value;
  fetch(`${API}/create-folder`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ folderName }),
  })
    .then(res => res.json())
    .then(data => {
      showStatus(data.message);
      document.getElementById("folderName").value = "";
    })
    .catch(err => showStatus("Error creating folder"));
}

function createFile() {
  const fileName = document.getElementById("fileName").value;
  const fileContent = document.getElementById("fileContent").value;

  fetch(`${API}/create-file`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fileName, content: fileContent }),
  })
    .then(res => res.json())
    .then(data => {
      showStatus(data.message);
      document.getElementById("fileName").value = "";
      document.getElementById("fileContent").value = "";
    })
    .catch(err => showStatus("Error creating file"));
}

function loadDriveItems() {
  fetch(`${API}/list`)
    .then(res => res.json())
    .then(data => {
      driveList.innerHTML = "";
      data.items.forEach(item => {
        const li = document.createElement("li");

       
        const isFolder = item.isFolder;
        li.textContent = `${isFolder ? "📁" : "📄"} ${item.name}`;

        driveList.appendChild(li);
      });
    })
    .catch(err => console.error("Error loading drive:", err));
}

loadDriveItems();
