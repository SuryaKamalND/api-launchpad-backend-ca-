require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
const userRoutes = require("./routes/userRoutes");

// TODO: Import routes
// const userRoutes = require("./routes/userRoutes");

// TODO: Use routes
// app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);

// Existing Route
app.get("/", (req, res) => {
  res.send("🚀 API Launchpad is running...");
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "success",
    message: "API is live and working",
  });
});
// TODO: Create a new route
// Route: GET /api/status
// Response:
// {
//   status: "success",
//   message: "API is live and working"
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
