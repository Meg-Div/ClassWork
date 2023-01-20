//nodemon app.js

//require our packages
const express = require("express");
const app = express();
const PORT = 3000;

//routes:
// app.get() method
// "/" Path
// request, response (objects)
// function

//request, response
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/apple", (req, res) => {
  res.send("Apple");
});

app.get("/error", (req, res) => {
  res.status(400).send("error");
});

//listen for requests
app.listen(PORT, console.log(`Listening on port ${PORT}`));
