const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const convertJsonToHtml = require("./js/index");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.post("/", (req, res) => {
  const data = req.body;
  const html = convertJsonToHtml(data);
  fs.writeFileSync("index.html", html);
  res.send(html);
});

app.listen(3000, (req, res) => {
  console.log("Starting is server");
});
