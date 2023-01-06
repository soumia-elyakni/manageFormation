const Users = require("../models/User");
const Roles = require("../models/Role");
const Organismes = require("../models/Organismes");

const bcrypt = require("bcrypt");
const storage = require("local-storage")

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

  const organisme = await Organismes.findOne({ name : body.organisme_id})
  body.organisme_id = organisme._id

  const unhashPassword = body.password;
  const salt = bcrypt.genSaltSync(10);
  body.password = await bcrypt.hash(body.password, salt);

  const newUser = await Users.create({...body})
    if(!newUser) throw Error('User not created')
    storage("unhashPassword", unhashPassword)
    
  
};

module.exports = {  addEmploye }