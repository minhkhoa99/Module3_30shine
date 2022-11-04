import mysql from "mysql2";

let pool = mysql.createPool({
  host: "localhost",
  database: "project",
  user: "root",
  password: "kolako2313",
});

let db = pool.promise();

export default db;
