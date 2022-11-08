import express from "express";
import { addCombo } from "../controllers/admin.js";
import {
  dashboard,
  signup,
  datlich,
  scheduleUserCreate,
  getschedule,
  cancelSchedule,
} from "../controllers/User.js";
import { notRequireAuth } from "../ventyfiToken.js";
const router = express.Router();

router.get("/", dashboard);
//get du lieu client
router.get("/hanh-trinh-toa-sang", getschedule);
router.post("/hanh-trinh-toa-sang", getschedule);
router.post("/push", scheduleUserCreate);
//delete du lieu client
router.delete("/hanh-trinh-toa-sang", cancelSchedule);

router.get("/signup", notRequireAuth, signup);
//get dat lich
router.get("/datlich", datlich);
router.post("/datlich", datlich);

// router.get("/vi-tri", vitri);
router.get("/service");
export default router;
