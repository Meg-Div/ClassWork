const express = require("express");
const app = express();
const PORT = 3006;

const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { Customers } = require("./sequelize/models");
const models = require("./sequelize/models");

//middleware
app.use(express.json());

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cookieParser());

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const store = new SequelizeStore({ db: models.sequelize });

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: store,
    /*
    cookie: {
      secure: false,
      //milliseconds
      maxAge: 1592000000,
    },
    */
  })
);
store.sync();
app.set("view engine", "ejs");

//custom middleware

const authenticate = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

app.get("/login", (req, res) => {
  res.render("pages/login");
});

//authenticate protects from seeing account without being logged in
app.get("/account", authenticate, (req, res) => {
  res.render("pages/account", { user: { username: "Meg" } });
});

app.get("/dashboard", authenticate, (req, res) => {
  res.render("pages/dashboard");
});

app.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      res.redirect("/login");
    });
  }
});

//authentication
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const user = await Customers.findOne({
    where: {
      username: username,
    },
  });
  if (!user) {
    res.status(400).send("No user found");
    return;
  }
  //would normally use bcrypt instead of req.body
  if (user.password === req.body.password) {
    //where we start a session:
    console.log(user.dataValues);
    req.session.user = user.dataValues;
    res.redirect("/account");
    return;
  } else {
    res.status(400).send("Incorrect username or password");
  }
});

app.listen(3006, console.log(`logged into port 3006`));
