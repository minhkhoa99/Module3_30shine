import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const requireAuth = (req, res, next) => {
  if (Object.keys(req.signedCookies).length === 0) {
    res.redirect("/");
  } else {
    next();
  }
};

export const notRequireAuth = (req, res, next) => {
  if (Object.keys(req.cookies).length !== 0) {
    res.redirect("/");
  } else {
    next();
  }
};
export const requireAuthAdmin = (req, res, next) => {
  if (Object.keys(req.cookies).length !== 0) {
    res.redirect("/admin/dashboard");
  } else {
    next();
  }
};

// export const showMessage = (status, message) => {
//   let messageContainer = document.getElementsByClassName("message")[0];
//   if (status === "access") {
//     messageContainer.innerHTML = `<div class = "alert alert-danger">${message}</div>`;
//   }
//   if (status === "update") {
//     messageContainer.innerHTML = `<div class = "alert alert-danger">${message}</div>`;
//   }
//   if (status === "create") {
//     messageContainer.innerHTML = `<div class = "alert alert-danger">${message}</div>`;
//   }
//   if (status === "delete") {
//     messageContainer.innerHTML = `<div class = "alert alert-danger">${message}</div>`;
//   }
//   setTimeout(() => {
//     messageContainer.innerHTML = "";
//   }, 3000);
// };
// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) return next(createError(401, "You are not authenticated!"));

//   jwt.verify(token, process.env.JWT, (err, user) => {
//     if (err) return next(createError(403, "Token is not valid!"));
//     req.user = user;
//     next()
//   });
// };
