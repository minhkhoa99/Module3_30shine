/** @format */
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

export const datlich = async (req, res) => {
  try {
    let { step, userid } = req.query;
    if (step == "0") {
      if (userid) {
        console.log(step, userid);
      }
    }
    res.render("datlich", {
      userName: req.cookies.access_token,
    });
  } catch (err) {}
};

export const vitri = async (req, res) => {
  try {
    res.render("vitri", {
      userName: req.cookies.access_token,
    });
  } catch (err) {}
};
