/** @format */
import e from "express";
import Shop from "../model/shopAddress.js";
import Combo from "../model/selectCombo.js";
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

export const clientSchedule = (req, res) => {
  res.render("clientSchedule", {
    userName: req.cookies.access_token,
  });
};

export const datlich = async (req, res, next) => {
  try {
    var { step, shopId } = req.query;
    if (step == "0") {
      if (shopId) {
        console.log("kkkk");

        Shop.findOne({ id: shopId }, (err, shop) => {
          console.log(shop);
          // let shopData = shop.map((shop) => shop.toObject());

          res.render("datlich", {
            shop: shop,
            userName: req.cookies.access_token,
          });
        });
      } else {
        console.log(req.query);
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
      Combo.find({}, (err, combo) => {
        combo.map((combo) => combo.toObject());
        res.render("service", {
          comboList: combo,
          userName: req.cookies.access_token,
        });
      });
    } else if (step == "3") {
      Combo.find({}, (err, combo) => {
        combo.map((combo) => combo.toObject());
        res.render("stylist", {
          comboList: combo,
          userName: req.cookies.access_token,
        });
      });
    }
  } catch (err) {
    res.status(404).json("something went really wrong");
    next(err);
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
