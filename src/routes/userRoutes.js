const express = require("express");
const router = express.Router();

// Define users ONCE
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Existing Route
router.get("/", (req, res) => {
  res.json(users);
});

// GET /api/users/:id
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  res.json({
    status: "success",
    data: user,
  });
});

module.exports = router;
