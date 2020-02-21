import routes from "../routes";

export const home = (req, res) => {
  console.log(routes.home);
  res.send("home");
};

export const getJoin = (req, res) => {
  res.send("join");
};

export const getLogin = (req, res) => {
  res.send("Login");
};

export const getConfirmAccount = (req, res) => {
  res.send("cofirm Account");
};
