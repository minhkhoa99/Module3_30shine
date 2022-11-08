/** @format */

import express from "express";
import { signup, signin } from "../controllers/auth.js";
import Jwt from "jsonwebtoken";
import { notRequireAuth, requireAuth } from "../ventyfiToken.js";
const router = express.Router();

//CREATE A USER
router.post("/signup", signup);
//SIGNIN
router.post("/", signin);

router.get("/logout");

export default router;
