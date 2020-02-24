export const home = (req, res) => res.render("home", { pageTitle: "home" });
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "login" });
export const getPhotos = (req, res) =>
  res.render("photos", { pageTitle: "photos" });
export const getProfile = (req, res) =>
  res.render("profile", { pageTitle: "profile" });
