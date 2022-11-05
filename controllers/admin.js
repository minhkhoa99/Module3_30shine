import express from "express";
import mongoose from "mongoose";
import User from "../model/user.js";
import Shop from "../model/shopAddress.js";
import { createError } from "../error.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import user from "../model/user.js";

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
//render username
export const renderUsername = async (req, res, next) => {
  user.find({}, (err, user) => {
    if (err) {
      res.send("something went really wrong");
      next();
    } else {
      let usersData = user.map((user) => user.toObject());
      console.log(
        new Date(usersData[0].createdAt).toISOString().substring(0, 20)
      );
      res.render("dashboardAdmin", {
        userList: usersData,
      });
    }
  });
};
//dashboard admin
// export const adminDashboard = (req, res) => {
//   res.render("dashboardAdmin");
// };

//quanly dat lich
export const renderSchedule = (req, res) => {
  res.render("adminSchedule");
};
// san pham
//get san pham
export const addStore = async (req, res, next) => {
  try {
    Shop.find({}, (err, shop) => {
      if (err) {
        res.send("something went really wrong");
        next();
      } else {
        let shopData = shop.map((shop) => shop.toObject());
        console.log(
          new Date(shopData[0].createdAt).toISOString().substring(0, 20)
        );
        res.render("updataProduct", {
          shopList: shopData,
        });
      }
    });
  } catch (err) {
    next(err);
  }
};

//post len/admin/store
export const postStore = async (req, res, next) => {
  try {
    const formData = req.body;
    const store = new Shop(formData);
    store.save();
    // res.send(req.body);
    res.redirect("/admin/san-pham");
  } catch (err) {
    next(err);
  }
};

//combo
export const renderCombo = (req, res) => {
  res.render("updataCombo");
};
