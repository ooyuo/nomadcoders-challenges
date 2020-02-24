export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "또또상";
  next();
};
