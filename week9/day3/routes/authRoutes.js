//imports the Express module using require()
const express = require("express");

//imports the bcrypt module using require()
const bcrypt = require("bcrypt");

//reate a new router object to handle requests
const router = express.Router();

//link the model files being used
const { Users } = require("../models");

//use postman:
//localhost:3007/auth/get_clinic

//bcrypt create user
router.post("/create_user", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, async (err, hash) => {
    const user = await Users.create({
      username: username,
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send(user);
  });
});

//bcrypt login
router.post("/login_user", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({
    where: {
      username: username,
    },
  });
  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      res.send(err);
      return;
    }
    if (!result) {
      res.status(401).send("Your password does not match.");
      return;
    }
    res.status(200).send("Looks like you have a matching password.");
  });
});

module.exports = router;
