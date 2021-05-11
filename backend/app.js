const express = require("express");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully",
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "feqbw023423",
      title: "First server side post",
      content: "This i scoming from server",
    },
    {
      id: "feqbw0232223",
      title: "Second server side post",
      content: "This is coming from server",
    },
  ];
  res.status(200).json({
    message: "Post fetched successfully!",
    posts,
  });
});

module.exports = app;
