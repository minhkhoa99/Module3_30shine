/** @format */

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ejs from "ejs";
import morgan from "morgan";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import shopRoutes from "./routes/shop.js";
import cookieParser from "cookie-parser";
import { notRequireAuth } from "./ventyfiToken.js";
import db from "./model/db.js";
import cors from "cors";
const server = express();
server.set("view engine", "ejs");
server.set("vies", `/views`);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(cors());

dotenv.config();

server.use(morgan("dev"));
server.use(cookieParser(""));
server.use(express.json());
server.use("/", userRoutes);
server.use("/", notRequireAuth, authRoutes);
server.use("/", shopRoutes);
server.get("/vitri", (req, res) => {
  res.render("vitri");
});
server.get("/datlich", (req, res) => {
  let { step } = req.query;
  if (step == 0) {
    res.render("datlich");
  } else if (step == 1) {
    db.execute(`SELECT * FROM wcp_shop`).then((data) => {
      let rows = data[0];
      res.render("vitri", {
        data: rows,
      });
    });
  }
});

server.use((err, req, res, next) => {
  if (err.status === 500) {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";

    return res.status(status).json({
      success: false,
      status,
      message,
    });
  }
  !next();
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
