const Organismes = require("../models/Organismes");

const addOrganisme = async (req, res) => {
  const { body } = req; 

  if (!body.name || !body.ville || !body.adress || !body.phone)
    {res.send("Fill All Inputs")}

    else
   { const organisme = await Organismes.create({...body})
    if (organisme) res.send("created successfully")}
    
};


const getAllOrganisme = async (req, res) => {
  const organismes = await Organismes.find()
  if(!organismes || organismes == 0) res.status(404).send({err : "tableau organismes vide"})

  res.status(200).send(organismes)

}


module.exports = { addOrganisme,
                   getAllOrganisme };
