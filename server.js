const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

let posts = [];

// 投稿取得
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// 投稿追加
app.post("/api/posts", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).send("内容が空です");

  const post = {
    id: Date.now(),
    text,
    createdAt: new Date()
  };

  posts.unshift(post);
  res.json(post);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
