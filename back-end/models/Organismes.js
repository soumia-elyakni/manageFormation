const mongoose = require('mongoose')

const OrganismeSchema = new mongoose.Schema({
        name : {
            type : String,
        },

        ville : {
            type: String,
        },

        adress : {
            type: String,
        },

        phone :{
            type : String
        },


})

module.exports = mongoose.model('Organismes', OrganismeSchema)