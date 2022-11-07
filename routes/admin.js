import {
  signinAdmin,
  dashSignin,
  renderSchedule,
  addStore,
  edit,
  deleteShop,
  addCombo,
  postCombo,
  renderUsername,
  postStore,
  editCombo,
  deleteCombo,
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

//get adminschdule
router.get("/quan-ly-dat-lich", renderSchedule);
//post
router.post("/quan-ly-dat-lich");
//put
router.put("/quan-ly-dat-lich");

//delete
router.delete("/quan-ly-dat-lich");
//get updateproduct
router.get("/san-pham", addStore);
//post
router.post("/store", postStore);
//put
router.put("/san-pham/:id", edit);

//delete
router.delete("/san-pham/:id", deleteShop);

//get hanh trinh toa sang
router.get("/hanh-trinh-toa-sang", addCombo);
//post
router.post("/combo", postCombo);
//put

//
router.put("/hanh-trinh-toa-sang/:id", editCombo);

//delete
router.delete("/hanh-trinh-toa-sang/:id", deleteCombo);
export default router;
