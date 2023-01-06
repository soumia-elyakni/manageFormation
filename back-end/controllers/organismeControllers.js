const Organismes = require("../models/Organismes");

const addOrganisme = async (req, res) => {
  const { body } = req; 

  if (!body.name || !body.ville || !body.adress || !body.phone)
    throw Error("Fill All Inputs");

    const organisme = await Organismes.create({...body})

     console.log({ organisme })
};

module.exports = { addOrganisme };
