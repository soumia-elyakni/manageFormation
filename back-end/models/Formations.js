const mongoose = require('mongoose')

const FormationSchema = new mongoose.Schema({
        title : {
            type : String,
        },

        image :{
            type : String,
            default: "default.jpg"
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

})

module.exports = mongoose.model('Formations', FormationSchema)