const express = require("express");
const router = express.Router();
const db = require("../config/db");
const { getPostFromCache, setPostFromCache } = require("../cache");

router.get("/", async (req, res) => {
  try {
    const posts = await db.query("SELECT id, body, created_at FROM posts");

    res.json(posts.rows);
  } catch (error) {
    console.log("error", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const cachedPost = await getPostFromCache(id);

    if (!(cachedPost === null)) return res.json(cachedPost);

    const post = await db.query(
      "SELECT id, body, created_at FROM posts WHERE id = $1",
      [id]
    );

    setPostFromCache(id, post.rows[0]);

    res.json(post.rows[0]);
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
