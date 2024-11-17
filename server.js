const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: "./uploads", // Folder to store files
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

// Middleware
app.use(express.static("public")); // Serve static files
app.use(express.json());

// API endpoint to handle file upload
app.post("/upload", upload.single("cv"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.status(200).send({ message: "File uploaded successfully!", file: req.file });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
