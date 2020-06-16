const express = require("express");
const router = express.Router();
const Post = require("../../models/posts/posts");

router.get("/", async (req, res, next) => {
  let posts = await Post.find();
  if (posts != null) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(posts);
  }
});
router.post("/", async (req, res, next) => {
  const { name, subject, professor } = req.body;
  let post;
  try {
    post = new Post({
      name,
      subject,
      professor,
    });
    await post.save();
  } catch {
    if (post === null) {
      console.log("no post");
    }
  }
});

module.exports = router;
