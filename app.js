/** @format */

const express = require("express");
const app = express();
const ejs = require("ejs");
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true })); //from-input
app.use(bodyParser.json()); //json
app.use(morgan("dev")); //log request on server
app.use(express.static("public")); //hosting static files

app.listen(3000, (req, res) => {
  console.log("server listening on port http://localhost:3000");
});
