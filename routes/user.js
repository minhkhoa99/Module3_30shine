import express from "express";
import { dashboard, signup } from "../controllers/User.js";
import { notRequireAuth } from "../ventyfiToken.js";
const router = express.Router();

router.get("/", dashboard);

router.get("/signup", notRequireAuth, signup);

export default router;
