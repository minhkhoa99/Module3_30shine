import { shop30Shine, clickbuy } from "../controllers/shop.js";
import express from "express";

const router = express.Router();

router.get("/shop-30shine", shop30Shine);
router.get("/thanh-toan-san-pham", clickbuy);

export default router;
