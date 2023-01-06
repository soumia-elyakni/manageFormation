const Users = require('../models/User')
const Roles = require('../models/Role')

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const storage = require("local-storage");

const Login = async(req, res) => {
    const { body } = req;

    if (!body.email || !body.password) throw Error("Fill all Inputs")

    const userExist = await Users.findOne({email : body.email})
    if(!userExist) throw Error("User email not existed")

    const rightPassword = await bcrypt.compare(body.password, userExist.password)
    if(!rightPassword) throw Error("Wrong Password")

    const role = await Roles.findOne({_id : userExist.role_id})

    const token = await jwt.sign({
                    id : userExist._id,
                    role : role.name
                }, process.env.TOKEN_CODE)
    
    storage("token", token)    
    res.send({ 
                first_name: userExist.first_name,
                last_name: userExist.last_name, 
                role: role.name, 
                token: storage("token") })
                
    
    const name = userExist.first_name
    console.log('Hello ' + name)
}

const Logout = async (req, res) => {
    storage.clear();
    res.send({ message: "User is logouted" });
  };


module.exports = {
    Login,
    Logout
}