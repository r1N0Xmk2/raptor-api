module.exports = function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Origin", config.allowOrigin);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
};
