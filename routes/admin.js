import {
  signinAdmin,
  dashSignin,
  adminDashboard,
  renderProduct,
  renderSchedule,
  renderCombo,
} from "../controllers/admin.js";
import express from "express";
import { requireAuthAdmin } from "../ventyfiToken.js";
const router = express.Router();
//getdashboad Signin
router.get("/signin", dashSignin);
//post signin
router.post("/signin", signinAdmin);

//get dashboardAdmin
router.get("/dashboard", adminDashboard);
//post
router.post("/dashboard");
//delete
router.delete("/dashboard");

//get adminschdule
router.get("/quan-ly-dat-lich", renderSchedule);
//post
router.post("/quan-ly-dat-lich", renderSchedule);
//delete
router.delete("/quan-ly-dat-lich", renderSchedule);
//get updateproduct
router.get("/san-pham", renderProduct);
//post
router.post("/san-pham", renderProduct);
//delete
router.delete("/san-pham", renderProduct);

//get hanh trinh toa sang
router.get("/hanh-trinh-toa-sang", renderCombo);
//post
router.post("/hanh-trinh-toa-sang", renderCombo);
//delete
router.delete("/hanh-trinh-toa-sang", renderCombo);
export default router;
