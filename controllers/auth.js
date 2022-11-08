/** @format */

import express from "express";
import mongoose from "mongoose";
import User from "../model/user.js";
import { createError } from "../error.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res
      .status(200)
      .json({ status: "success", message: "User created successfully" });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "SĐT hoặc tên bị trùng vui lòng nhập lại",
    });
  }
};

export const signin = async (req, res, next) => {
  console.log("Hello world");
  try {
    //tim kiem user bang findOne()
    const user = await User.findOne({ telephone: req.body.telephone });
    console.log(user);
    if (!user) return next(createError(404, "User not found!"));
    const isConrrect = await bcrypt.compare(req.body.password, user.password);
    console.log("is correct", isConrrect);

    if (!isConrrect) return next(createError(400, "Wrong createdentials!"));
    //su dung jsonwebtoken tro toi id trong db lay ve id
    console.log(process.env.JWT);
    const token = Jwt.sign({ id: user._id }, process.env.JWT);
    //lay ra object user id co password trung voi user da duoc tao
    //truyen xuong res.cookies()
    console.log("token", token);
    const { password, ...others } = user._doc;
    //tao cookie connect thanh cong
    console.log("Before response");
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .cookie("userName", user._id, {
        httpOnly: true,
      })
      .status(200)
      .json({ others, status: "success" });
  } catch (err) {
    next(err);
  }
};

// export const signOut = async (req, res, next) => {
//   try {
//     res
//       .clearCookie("access_token")
//       .status(200)
//       .json({ message: "Successfully logged out" });
//   } catch (err) {
//     console.log(err);
//   }
// };
//signin danh cho admin tim kiem ten dang nhap
// export const signinAdmin = async (req, res, next) => {
//   try {
//     //tim kiem user bang findOne()
//     const user = await User.findOne({ name: req.body.name });
//     console.log(req.body.telephone);
//     if (!user) return next(createError(404, "User not found!"));
//     const isConrrect = await bcrypt.compare(req.body.password, user.password);

//     if (!isConrrect) return next(createError(400, "Wrong createdentials!"));
//     //su dung jsonwebtoken tro toi id trong db lay ve id
//     const token = Jwt.sign({ id: user._id }, process.env.JWT);
//     //lay ra object user id co password trung voi user da duoc tao
//     //truyen xuong res.cookies()
//     const { password, ...others } = user._doc;
//     //tao cookie connect thanh cong
//     res
//       .cookie("access_token", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json(others);
//   } catch (err) {
//     next(err);
//   }
// };
