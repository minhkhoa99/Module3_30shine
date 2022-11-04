import express from "express";
import {
  dashboard,
  signup,
  clientSchedule,
  datlich,
} from "../controllers/User.js";
import { notRequireAuth } from "../ventyfiToken.js";
const router = express.Router();

router.get("/", dashboard);
//get du lieu client
router.get("/hanh-trinh-toa-sang", clientSchedule);
//delete du lieu client
router.delete("/hanh-trinh-toa-sang", clientSchedule);

router.get("/signup", notRequireAuth, signup);

router.get("/", datlich);
export default router;
