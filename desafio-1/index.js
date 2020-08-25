const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("Eu sou Full Cycle");
});

app.listen(8080);
