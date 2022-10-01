// (A) LOAD DB MODULE
const mysql2 = require("mysql2");

// (B) CREATE CONNECTION - CHANGE TO YOUR OWN !
const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "the_employee_tracker"
});
db.connect((err) => {
  if (err) { throw err; }
  console.log("DB connection OK");
});

module.exports = db;