const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(7000);
console.log("App running http://localhost:7000");

app.get("/", (req, res) => {
  res.send(` <h1>name: "azin"</h1>
  <h1>sid: 300365490</h1>`);
});
