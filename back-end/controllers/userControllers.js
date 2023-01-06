const Users = require("../models/User");
const Roles = require("../models/Role");

const bcrypt = require("bcrypt");

const addEmploye = async (req, res) => {
  const { body } = req;
  if (
    !body.email ||
    !body.password ||
    !body.first_name ||
    !body.last_name ||
    !body.organisme_id
  ) throw Error("Fill All Inputs")

  const userExist = await Users.findOne({ email: body.email });
  if (userExist) throw Error("Employe already exist");

  const role = await Roles.findOne({ name : "employe"})
  body.role_id = role._id

  const unhashPassword = body.password;
  const salt = bcrypt.genSaltSync(10);
  body.password = await bcrypt.hash(body.password, salt);
  console.log({...body, unhashPassword})


};

module.exports = {  addEmploye }