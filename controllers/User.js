/** @format */
import e from "express";
import Shop from "../model/shopAddress.js";
import Combo from "../model/selectCombo.js";
import Schedule from "../model/schedule.js";
export const dashboard = (req, res) => {
  if (Object.keys(req.cookies).length === 0) {
    res.render("dashboard", {
      userName: "",
    });
  } else {
    res.render("dashboard", {
      userName: req.cookies.access_token,
    });
  }
};

export const signup = (req, res) => {
  res.render("signup");
};

export const datlich = async (req, res, next) => {
  try {
    var { step, shopId, comboId } = req.query;
    if (step == "0") {
      if (shopId) {
        Shop.findOne({ userid: shopId }, (err, shop) => {
          console.log(shop);
          // let shopData = shop.map((shop) => shop.toObject());
          if (comboId) {
            Combo.findOne({ comboid: comboId }, (err, combo) => {
              console.log(shop);
              // let shopData = shop.map((shop) => shop.toObject());

              res.render("datlich", {
                combo: combo,
                shop: shop,
                userName: req.cookies.access_token,
              });
            });
          } else {
            res.render("datlich", {
              shop: shop,
              combo: null,
              userName: req.cookies.access_token,
            });
          }
        });
      } else {
        console.log(req.query);
        console.log(req.cookies.access_token);
        res.render("datlich", {
          shop: null,
          userName: req.cookies.access_token,
        });
      }
    } else if (step == "1") {
      Shop.find({}, (err, shop) => {
        let shopData = shop.map((shop) => shop.toObject());
        res.render("vitri", {
          shopList: shopData,
          userName: req.cookies.access_token,
        });
      });
    } else if (step == "2") {
      let { shopId } = req.query;
      Combo.find({}, (err, combo) => {
        combo.map((combo) => combo.toObject());
        res.render("service", {
          comboList: combo,
          shopId,
          userName: req.cookies.access_token,
        });
      });
    } else if (step == "3") {
      Combo.find({}, (err, combo) => {
        combo.map((combo) => combo.toObject());
        res.render("stylist", {
          combo: combo,
          userName: req.cookies.access_token,
        });
      });
    }
  } catch (err) {
    res.status(404).json("something went really wrong");
    next(err);
  }
};

export const scheduleUserCreate = async (req, res, next) => {
  console.log(req.body);
  console.log(req.cookies);
  let data = {
    ...req.body,
    userName: req.cookies.userName,
  };
  await Schedule.create(req.body);
  // console.log(req.shop.id);
  res.status(201).json({
    message: "update successfully",
    status: "success",
  });
};
export const getschedule = async (req, res, next) => {
  try {
    Schedule.find({}, (err, schedule) => {
      let scheduleUser = schedule.map((schedule) => schedule.toObject());

      res.render("clientSchedule", {
        schedule: scheduleUser,
        userName: req.cookies.userName,
      });
    });
  } catch (err) {
    res.status(404).json("something went really wrong");
    next(err);
  }
};

export const cancelSchedule = async (req, res, next) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "delete successfully",
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
};
// export const vitri = async (req, res, next) => {
//   try {
//     let { step, shopId } = req.query;
//     console.log(req.query);
//     if (step == "0") {
//       if (shopId) {
//         Shop.find({}, (err, shop) => {
//           let shopData = shop.map((shop) => shop.toObject());

//           res.render("datlich", {
//             shopList: shopData,
//             userName: req.cookies.access_token,
//           });
//         });
//       } else {
//         res.render("vitri");
//       }
//     } else if (step == "1") {
//       Shop.find({}, (err, shop) => {
//         let shopData = shop.map((shop) => shop.toObject());
//         res.render("vitri", {
//           shopList: shopData,
//           userName: req.cookies.access_token,
//         });
//       });
//     }
//   } catch (err) {
//     res.status(404).json("something went really wrong");
//     next(err);
//   }
// };
