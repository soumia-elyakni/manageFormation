const FormationHistory = require("../models/FormationHistory");
const Formations = require("../models/Formations");
const Users = require("../models/User");

const generateNewAssignement = async (user, formation) => {
  const newAssignement = FormationHistory.create({
    user_id: user,
    formation_id: formation,
  });
  if (newAssignement) console.log("Formation assigné à l'employé");
  else throw Error("Formation non assigné");
}

const getFormationsByUser = async(req, res) => {
 const id = req.user.id
  const FormationsObject = await FormationHistory.aggregate([
    { $match: { user_id: {id} } },
    {
        $lookup: {
            from:  "formations" ,
            localField: "formation_id",
            foreignField: "_id",
            as: "infoFormation"
        }
    },
  
])

    
    if(!FormationsObject || FormationsObject == 0) res.status(404).send("no formations in your archive")

    res.status(200).send({FormationsObject})
}

module.exports = {
                  generateNewAssignement,
                  getFormationsByUser
                }
