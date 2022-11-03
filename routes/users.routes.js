const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

router.get("/", userController.getAllCategory);
router.get("/:id/products", userController.getProductByCategoryId);

module.exports = router;
