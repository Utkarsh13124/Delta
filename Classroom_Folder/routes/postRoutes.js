const express = require("express");
const router = express.Router();

// Index - GET /posts
router.get("/", (req, res) => {
    console.log("Post get Route.");
    res.send("All posts");
});

// Show post - GET /posts/:id
router.get("/:id", (req, res) => {
    console.log("Post get Route.");
    res.send(`Details for post ${req.params.id}`);
});

// Post post - POST /posts
router.post("/", (req, res) => {
    console.log("Post post Route.");
    res.send("Post created");
});

// Delete - DELETE /posts/:id
router.delete("/:id", (req, res) => {
    console.log("Delete for post");
    res.send(`Post ${req.params.id} deleted`);
});

module.exports = router;