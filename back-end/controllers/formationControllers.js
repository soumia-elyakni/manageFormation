const Formations = require("../models/Formations");
const fs = require('fs');


const addFormation = async (req, res) => {
  const {body} = req
  const createFormation = {
    title: body.title,
    description:body.description,
    date_debut: body.date_debut,
    date_fin: body.date_fin,
    image:req.file.filename
}

  if (!body.title || !body.description || !body.date_debut || !body.date_fin)
    res.send("Fill All Inputs");


const newFormation = await Formations.create(createFormation)
if(!newFormation) throw Error('not created')
  
res.send("created")  

};


const updateStatus = (startDate, endDate) => {
  const currentDate = new Date();
  let newStatus;

  if (currentDate.getTime() < startDate.getTime()) {
    newStatus = 'Prévue';
  } else if (currentDate.getTime() > startDate.getTime() && currentDate.getTime() < endDate.getTime()) {
    newStatus = 'En cours';
  } else if (currentDate.getTime() > endDate.getTime()) {
    newStatus =   'Terminée';
  }

  return newStatus
}

const updateAllStatus = async(req, res) => {
  const formations = await Formations.find({});
   await formations.map(async(formation)=>{
    const startDate = formation.date_debut;
    const endDate = formation.date_fin;
    const status = formation.status

    await updateStatus(startDate, endDate)
    const newStatus = updateStatus(startDate, endDate)
    console.log(newStatus)
    if(newStatus !== status){
      const update = await Formations.findByIdAndUpdate({_id : formation._id}, { $set: { status: newStatus } }, { new: true })
      if(update) console.log('status updated')
    } else { console.log('already up to date')}
   
  })
}

module.exports = { addFormation,
                   updateStatus,
                   updateAllStatus  };
