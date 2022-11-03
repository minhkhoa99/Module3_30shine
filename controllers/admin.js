import express from "express";
import mongoose from "mongoose";
import User from "../model/user.js";
import { createError } from "../error.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// signin danh cho admin tim kiem ten dang nhap
export const dashSignin = (req, res) => {
  res.render("loginAdmin");
};
export const signinAdmin = async (req, res, next) => {
  try {
    //tim kiem user bang findOne()
    const user = await User.findOne({ name: req.body.name });
    console.log(req.body.telephone);
    if (!user) return next(createError(404, "User not found!"));
    const isConrrect = await bcrypt.compare(req.body.password, user.password);

    if (!isConrrect) return next(createError(400, "Wrong createdentials!"));
    //su dung jsonwebtoken tro toi id trong db lay ve id
    const token = Jwt.sign({ id: user._id }, process.env.JWT);
    //lay ra object user id co password trung voi user da duoc tao
    //truyen xuong res.cookies()
    const { password, ...others } = user._doc;
    //tao cookie connect thanh cong
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ others, status: "success" });
  } catch (err) {
    next(err);
  }
};

//dashboard admin
export const adminDashboard = (req, res) => {
  res.render("dashboardAdmin");
};

//quanly dat lich
export const renderSchedule = (req, res) => {
  res.render("adminSchedule");
};
//san pham
export const renderProduct = (req, res) => {
  res.render("updataProduct");
};
//combo
export const renderCombo = (req, res) => {
  res.render("updataCombo");
};
