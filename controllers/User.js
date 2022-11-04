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
