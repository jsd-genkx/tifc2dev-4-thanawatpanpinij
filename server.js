const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

let posts = [];

app.get("/posts", (req, res) => {
    res.send(posts);
});

app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: posts.length + 1,
        title,
        content,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/posts`);
});
