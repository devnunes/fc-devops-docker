const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

const create = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255) unique, primary key(id))`;
connection.query(create);
const insert = `INSERT IGNORE INTO people(name) values('Matheus')`;
connection.query(insert);
connection.end();

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle</h1>");
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
