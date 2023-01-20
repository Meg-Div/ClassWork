//nodemon app.js

const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3002;
const savedUsers = [];

//this allows your request to have a body
app.use(express.json());

//routes

//set postman to GET
app.get("/", (req, res) => {
  res.send("home");
});

//set postman to POST
app.post("/megan", (req, res) => {
  res.send("Megan");
});

//writing to file
app.get("/howd", (req, res) => {
  fs.readFile("home.html", (err, data) => {
    res.writeHead(200, { "cpntent-type": "text/html" });
    res.write(data);
    return res.end();
  });
});

//dynamic path in node

//localhost:3002/user/3
/*
app.get("/user/:userId", (req, res) => {
  const users = [
    { name: "Joe", id: 1 },
    { name: "Ethan", id: 2 },
    { name: "Mauro", id: 3 },
  ];
  const userFound = users.filter((user) => user.id === req.params.userId);
  const nameFound = users.filter((user) => user.name === req.params.nameId);

  const found = users.find((user) => user.name === req.params.nameId);

  console.log(req.body);
  res.send(`I am looking at user ${req.params.nameId}`);
  res.send(`I am looking at user ${userFound[0]} with id ${nameFound[0]}`);
});
*/

//localhost:3002/user/3
app.get("/user/:userId", (req, res) => {
  const users = [
    { name: "Joe", id: 1 },
    { name: "Ethan", id: 2 },
    { name: "Mauro", id: 3 },
  ];

  const found = users.find((user) => user.id === Number(req.params.userId));

  savedUsers.push(req.body);
  console.log(savedUsers);

  res.send(`I am looking at user ${found.name} with id ${found.id}`);
});

//write four routes
//create_user
//read_users all users from array in response
//update_user/:id
//delete_user/:id

app.listen(PORT, console.log(PORT, `Listing on port ${PORT}`));
