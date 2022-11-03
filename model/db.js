const mysql = require("mysql2");

let pool = mysql.createPool({
  host: "localhost",
  database: "project",
  user: "root",
  password: "kolako2313",
});

module.exports = pool.promise();
