const jwt = require("jsonwebtoken");
const { createError } = require("../utlis/error.js");

exports.verifyToken = (req, res, next) => {
  //console.log(req);
  const token = req.cookies.access_token;
 // console.log(token);
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

exports.verifyUser = (req, res, next) => {
  if (req.user.id === req.params.id || req.user.id === req.user.isAdmin) {
    next();
  } else {
    return next(createError(403, "You are not authorized!"));
  }
};

exports.verifyAdmin = (req, res, next) => {
  // console.log(req.cookies.access_token);
 
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  ;
};
