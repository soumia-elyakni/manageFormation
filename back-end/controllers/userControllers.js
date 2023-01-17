const Users = require("../models/User");
const Roles = require("../models/Role");
const Organismes = require("../models/Organismes")
const Formations = require("../models/Formations")
const formationHistory = require('../models/FormationHistory')
const {generateNewAssignement} = require("./formationHistoryControllers")

const bcrypt = require("bcrypt");
const storage = require("local-storage")

const addEmploye = async (req, res) => {
  const { body } = req;

  if (
    !body.email ||
    !body.password ||
    !body.first_name ||
    !body.last_name ||
    !body.organisme
  ) throw Error("Fill All Inputs")

  const userExist = await Users.findOne({ email: body.email });
  if (userExist) throw Error("Employe already exist");

  const role = await Roles.findOne({ name : "employe"})
  body.role_id = role._id

  const organisme = await Organismes.findOne({ name : body.organisme})
  body.organisme_id = organisme._id

  const unhashPassword = body.password;
  const salt = bcrypt.genSaltSync(10);
  body.password = await bcrypt.hash(body.password, salt);

  const newUser = await Users.create({...body})
    if(!newUser) throw Error('User not created')
    storage("unhashPassword", unhashPassword)
    
    res.send('created Succefully')
  
};

  const newUserFormation = async(req, res) => {

    const { userId } = req.params;
    const { body } = req
    const title = body.title


    const formationInfos = await Formations.findOne({ title : title});
    const formationId = formationInfos._id

    const user = Users.findOne({_id : userId})
    const currentFormation = Formations.findOne({_id : user.formation_id})
    if(currentFormation.status == "En cours" || currentFormation.status == "Prevue") throw Error ("l'employé est dejà engagé par une formation")

    const newFormation = await Users.findOneAndUpdate({"_id": userId },  { $set: { formation_id: formationId } })
    if(!newFormation)  throw Error('formation non assigné')
    await generateNewAssignement(userId, formationId)

  }

  const getUserById = async(req,res) => {
    const id = req.user.id
    const user = await Users.findById(id)
    const role = await Roles.findOne({_id : user.role_id})
    res.status(200).send({
      email : user.email,
      first_name : user.first_name,
      last_name : user.last_name,
      role: role.name, 
    })
  }

  const getEmployes = async(req, res) => {
    
    const role = await Roles.findOne({name: "employe"}).select("_id")
    let employes = []
    const getemployes = await Users.find({role_id : role._id}).populate('organisme_id')

    if(!getemployes || getemployes == 0) res.status(404).send("Aucun employe trouvé")

    getemployes.forEach((e) => {
      employes.push({
        first_name : e.first_name,
        last_name : e.last_name,
        email : e.email,
        organisme : e.organisme_id.name
      })
    })

    
    res.status(200).send(employes)
    

  }

module.exports = {  
  addEmploye,
  newUserFormation,
  getUserById,
  getEmployes
 }