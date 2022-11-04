import {
  signinAdmin,
  dashSignin,
  renderProduct,
  renderSchedule,
  renderCombo,
  renderUsername,
} from "../controllers/admin.js";
import express from "express";
import { requireAuthAdmin } from "../ventyfiToken.js";
const router = express.Router();
//getdashboad Signin
router.get("/signin", dashSignin);
//post signin
router.post("/signin", signinAdmin);

//get dashboardAdmin
router.get("/dashboard", renderUsername);
//post
router.post("/dashboard");
//put
router.post("/dashboard");

//delete
router.delete("/dashboard");

//get adminschdule
router.get("/quan-ly-dat-lich", renderSchedule);
//post
router.post("/quan-ly-dat-lich");
//put
router.put("/quan-ly-dat-lich");

//delete
router.delete("/quan-ly-dat-lich");
//get updateproduct
router.get("/san-pham", renderProduct);
//post
router.post("/san-pham");
//put
router.post("/san-pham");

//delete
router.delete("/san-pham");

//get hanh trinh toa sang
router.get("/hanh-trinh-toa-sang", renderCombo);
//post
router.post("/hanh-trinh-toa-sang");
//put

router.put("/hanh-trinh-toa-sang");

//delete
router.delete("/hanh-trinh-toa-sang");
export default router;
