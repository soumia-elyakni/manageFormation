const jwt = require("jsonwebtoken");
const Roles = require("../models/Role");

const authenticate = (req, res, next) => {
  if (!req.headers.authorization) throw Error("Missing token");

  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  try {
    console.log('test');
    const user = jwt.verify(token, process.env.TOKEN_CODE);
    console.log('test 2');
    req.user = user;
    next();
  } catch (err) {
    res.send({ message: "Invalid token" });
  }
};

const checkAdmin = async (req, res, next) => {
  const userRole = req.user.role;
  if (userRole !== "admin") throw Error("Unauthorized");
  
  next();
};

module.exports = { authenticate, checkAdmin };
