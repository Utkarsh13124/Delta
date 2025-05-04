const express = require("express");
const router = express.Router();

// Index Routes - GET /users
router.get("/", (req, res) => {
    console.log("User get Route.");
    res.send("All users");
});

// Show user - GET /users/:id
router.get("/:id", (req, res) => {
    console.log("User get Route.");
    res.send(`Details for user ${req.params.id}`);
});

// Post user - POST /users
router.post("/", (req, res) => {
    console.log("User post Route.");
    res.send("User created");
});

// Delete - DELETE /users/:id
router.delete("/:id", (req, res) => {
    console.log("Delete for user");
    res.send(`User ${req.params.id} deleted`);
});

module.exports = router;