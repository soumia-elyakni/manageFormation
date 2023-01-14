const jwt = require("jsonwebtoken");
const Roles = require("../models/Role");

const authenticate = (req, res, next) => {
  if (!req.headers.authorization) throw Error("Missing token");

  const token = req.headers.authorization.split(" ")[1];
  try {
    const user = jwt.verify(token, process.env.TOKEN_CODE);
    req.user = user;
    next();
  } catch (err) {
    res.send({ message: "Invalid token" });
  }
};

const checkAdmin = async (req, res, next) => {
  const userRole = req.user.role;
  if (userRole !== "admin") {
      return res.status(401).send("Unauthorized");
  }
  next();
};

module.exports = { authenticate, checkAdmin };
