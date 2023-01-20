//creating a server from scratch

const express = require("express");
const app = express();
const { Owners, Pets } = require("./models");
const PORT = 3008;
const { Op } = require("sequelize");

app.use(express.json());

//get pets table
app.get("/get_pets", async (req, res) => {
  const pets = await Pets.findAll();
  res.send(pets);
});

//get owners table
app.get("/get_owners", async (req, res) => {
  const owners = await Owners.findAll();
  res.send(owners);
});

//find a specific pet by owner
app.get("/get_meg", async (req, res) => {
  const owners = await Owners.findAll({
    where: {
      firstName: "Meg",
    },
  });
  res.send(owners);
});

//find a specific pet by name
app.get("/get_goldie", async (req, res) => {
  const owners = await Pets.findAll({
    where: {
      name: "Goldie",
    },
  });
  res.send(owners);
});

//get pets with id of 2-4
app.get("/get_ids", async (req, res) => {
  const owners = await Pets.findAll({
    where: {
      id: {
        [Op.gte]: 2,
        [Op.lte]: 4,
      },
    },
  });
  res.send(owners);
});

//change to post and add a pet
app.post("/create_pet", async (req, res) => {
  const { name, type, age } = req.body;
  const pets = await Pets.create({
    name,
    type,
    age,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send(pets);
});

//change to post and add a pet
app.post("/create_pet", async (req, res) => {
  const { name, type, age } = req.body;
  const pets = await Pets.create({
    name,
    type,
    age,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send(pets);
});
app.listen(PORT, console.log(`listening on port ${PORT}`));
