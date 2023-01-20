const express = require("express");
const app = express();
const data = require("./data");

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const mascots = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ];
  res.render("pages/index", {
    mascots: mascots,
  });
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/aboutme", (req, res) => {
  const me = {
    name: "Megan",
    city: "Walnut Creek",
    occupation: "Software Developer",
    favColor: "green",
    pic: "https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    about:
      "While I currently live in Walnut Creek, I love to travel and usually visit Europe at least once a year.",
  };
  res.render("pages/aboutme", {
    me: me,
  });
});

app.get("/dashboard", (req, res) => {
  const accountBalance = {
    amount: "$123,233,322,000.09",
  };
  const pending = {
    amount: "$46,788.21",
  };
  const processedData = {
    amount: "$657,441.22",
  };
  res.render("pages/dashboard", {
    accountBalance: accountBalance,
    pending: pending,
    processedData: processedData,
    data: data,
  });
});

app.listen(3001, console.log(`log onto port 3001`));
