const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Root => index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`QR scanner running on port ${PORT}`);
});
