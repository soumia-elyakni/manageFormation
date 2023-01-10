const mongoose = require('mongoose')

const FormationSchema = new mongoose.Schema({
        title : {
            type : String,
        },

        image :{
            type : Array,
        },

        description : {
            type: String,
        },

        date_debut :{
            type : Date
        },

        date_fin :{
            type : Date
        },

        status :{
            type : String,
            enum: ['Prévue', 'En cours','Terminée'],
            default : "Prévue"

        }

})

module.exports = mongoose.model('Formations', FormationSchema)