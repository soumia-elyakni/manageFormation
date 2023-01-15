const Organismes = require("../models/Organismes");

const addOrganisme = async (req, res) => {
  const { body } = req; 

  if (!body.name || !body.ville || !body.adress || !body.phone)
    throw Error("Fill All Inputs");

    const organisme = await Organismes.create({...body})

     console.log({ organisme })
};

const getAllOrganisme = async (req, res) => {
  const organismes = await Organismes.find()
  if(!organismes || organismes == 0) res.status(404).send("tableau organismes vide")

  res.status(200).send({organismes})
}

module.exports = { addOrganisme,
                   getAllOrganisme };
