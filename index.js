const express = require("express");
const app = express();
const port = 8091;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
