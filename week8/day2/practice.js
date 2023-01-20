//write five routes
// create_user POST
// read_users GET
// update_user/:id PUT
// delete_user/:id DELETE
// delete_users DELETE
//nodemon app.js

const { req, res } = require("express");
const express = require("express");
const app = express();
const PORT = 3003;
const savedUsers = [];

//this allows your request to have a body
app.use(express.json());

//routes

//create_user
app.post("/create_user", (req, res) => {
  const user = req.body;
  if (req.body) {
    res.status(400).send("Please enter in a user to add");
  } else {
    savedUsers.push(user);
    res.send(`User was added: ${user.name}`);
  }
});

/*
app.get("/read_users", (req, res) => {
  res.send(savedUsers);
});

app.delete("/delete_user/:userId", (req, res) => {
  const delUser = savedUsers.findIndex(
    (user) => user.id === Number(req.params.userId)
  );
  console.log(delUser);
  response.send(savedUsers);
});
*/

app.listen(PORT, console.log(PORT, `Listing on port ${PORT}`));
