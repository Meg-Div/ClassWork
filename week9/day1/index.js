require("dotenv").config();

const express = require("express");
const app = express();
const creds = require("./creds");
const PORT = 3009;

app.set("view engine", "ejs");

//lets you access to req.body
app.use(express.json());

//CRUD, create read, update, delete

//to avoid injection, use a placeholder
//for client query

//create
app.post("/create_todo", (req, res) => {
  creds.connect((err, client, release) => {
    // check for the error
    if (err) {
      return console.error(err.stack);
    }
    client.query(
      `INSERT INTO grocerylist (task) VALUES ($1);`,
      [req.body.task],
      (err, result) => {
        release();
        if (err) {
          res.status(400).send(err.stack);
        } else {
          res.status(200).send(result);
        }
      }
    );
  });
});

//read
app.get("/todo_list", (req, res) => {
  creds.connect((err, client, release) => {
    // check for the error
    if (err) {
      return console.error(err.stack);
    }
    client.query(`SELECT * FROM grocerylist;`, (err, result) => {
      release();
      if (err) {
        res.status(400).send(err.stack);
      } else {
        res.status(200).send(result.rows);
      }
    });
  });
});

//update
app.put("/modify_todo", (req, res) => {
  creds.connect((err, client, release) => {
    // check for the error
    if (err) {
      return console.error(err.stack);
    }
    client.query(
      `UPDATE grocerylist SET task = ($1) WHERE id = ($2);`,
      [req.body.task, req.body.id],
      (err, result) => {
        release();
        if (err) {
          res.status(400).send(err.stack);
        } else {
          res.status(200).send(result);
        }
      }
    );
  });
});

//delete
app.delete("/del_todo", (req, res) => {
  creds.connect((err, client, release) => {
    // check for the error
    if (err) {
      return console.error(err.stack);
    }
    client.query(
      `DELETE FROM grocerylist WHERE id = ($1);`,
      [req.body.id],
      (err, result) => {
        release();
        if (err) {
          res.status(400).send(err.stack);
        } else {
          res.status(200).send(result);
        }
      }
    );
  });
});

///new items:

//by putting todo in views, you can simply put in todo
//instead of pages/todo
app.get("/todo", (req, res) => {
  creds.connect((err, client, release) => {
    // check for the error
    if (err) {
      return console.error(err.stack);
    }
    client.query(`SELECT * FROM grocerylist`, (err, result) => {
      release();
      if (err) {
        res.status(400).send(err.stack);
      } else {
        res.render("todo", { result: result });
      }
    });
  });
});

//update
app.post("/todo_add", (req, res) => {
  creds.connect((err, client, release) => {
    // check for error
    if (err) {
      return console.error(err.stack);
    }
    client.query(
      `INSERT INTO grocerylist (task, isCompleted, notes) VALUES ($1, $2, $3);`,
      [req.body.task, req.body.isCompleted, req.body.note],
      (err, result) => {
        release(); // release the connection once a query was run
        if (err) {
          res.status(400).send(err.stack);
        } else {
          res.status(200).send(result);
        }
      }
    );
  });
});

app.listen(3009, console.log(`log onto port 3009`));
