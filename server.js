/** @format */

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ejs from "ejs";
import morgan from "morgan";
import bodyParser from "body-parser";

const server = express();
server.set("view engine", "ejs");
server.set("vies", `/views`);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("public"));
dotenv.config();

server.get("/", (req, res) => {
  res.render("dashboard");
});
const connected = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

server.listen(3000, () => {
  connected();
  console.log("connect http://localhost:3000");
});
