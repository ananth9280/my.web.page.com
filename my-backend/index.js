const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    res.json({ status: "success", message: "Login successful!" });
  } else {
    res.status(401).json({ status: "fail", message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
