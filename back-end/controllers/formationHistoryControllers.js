const FormationHistory = require("../models/FormationHistory");

const generateNewAssignement = async (user, formation) => {
  const newAssignement = FormationHistory.create({
    user_id: user,
    formation_id: formation,
  });
  if (newAssignement) console.log("Formation assigné à l'employé");
  else throw Error("Formation non assigné");
}

module.exports = {generateNewAssignement}
