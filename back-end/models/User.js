const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    first_name : {
        type : String,
        
    },

    last_name : {
        type : String

    },

    phone : {
        type : String
    },

    email : {
        type : String
    },

    password : {
        type : String
    },

    role_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roles"
    },

    organisme_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organismes"
    },

    formation_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Formations"
    },
})

module.exports = mongoose.model('Users', UserSchema)