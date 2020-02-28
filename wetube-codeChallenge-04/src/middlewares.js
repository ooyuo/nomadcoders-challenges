export const middlewares = (req, res, next) => {
  res.locals.siteTitle = "Nomad Movies";
  next();
};
