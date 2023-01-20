//creating a pool
const Pool = require("pg").Pool;

//the connection
const creds = new Pool({
  host: "localhost",
  port: 5432,
  database: "todolist",
  user: "postgres",
  password: process.env.PASSWORD,
});

module.exports = creds;
