const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

const baseDir = path.join(__dirname, "MyDrive");   


app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); 

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir);
}


app.post("/create-folder", (req, res) => {
  const { folderName } = req.body;
  if (!folderName) {
    return res.status(400).send({ message: "Folder name is required" });
  }

  const folderPath = path.join(baseDir, folderName);
  if (fs.existsSync(folderPath)) {
    return res.status(400).send({ message: "Folder already exists" });
  }

  fs.mkdirSync(folderPath);
  res.status(200).send({ message: "Folder created successfully" });
});

app.post("/create-file", (req, res) => {
  const { fileName, fileContent } = req.body;
  if (!fileName) {
    return res.status(400).send({ message: "File name is required" });
  }

  const filePath = path.join(baseDir, fileName);
  fs.writeFileSync(filePath, fileContent || "");
  res.status(200).send({ message: "File created successfully" });
});

app.get("/list", (req, res) => {
  fs.readdir(baseDir, { withFileTypes: true }, (err, files) => {
    if (err) {
      return res.status(500).send({ message: "Error reading drive" });
    }

    const items = files.map(entry => ({
      name: entry.name,
      isFolder: entry.isDirectory(),
    }));

    res.status(200).send({ items });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
