//require our packages
const express = require("express");
const app = express();
const PORT = 3001;

const cowsay = require("cowsay");

//CRUD create, read, update, delete
app.get("/dogs", (req, res) => {
  res.send("Doggo");
});

app.post("/display_dogs", (req, res) => {
  res.send("Pug");
});

app.put("/update_dogs", (req, res) => {
  res.send("Wolf");
});

app.delete("/remove_dogs", (req, res) => {
  res.send("No more dog");
});

app.use(express.json());
//^ This is why this works: text: `${req.body.message}`,

app.get("/cowsayThink", (req, res) => {
  res.send(
    console.log(
      cowsay.think({
        text: "I'm a moooodule",
        e: "><",
        T: "U ",
      })
    )
  );
});

app.get("/cowsaySpeak", (req, res) => {
  res.send(
    console.log(
      cowsay.say({
        text: "I'm a moooodule",
        e: "oO",
        T: "U ",
      })
    )
  );
});

app.post("/cowsay", (req, res) => {
  console.log(req);
  res.send(
    console.log(
      cowsay.say({
        text: `${req.body.message}`,
        e: "oO",
        T: "U ",
      })
    )
  );
});

//listen for requests
app.listen(PORT, console.log(`Listening on port ${PORT}`));
