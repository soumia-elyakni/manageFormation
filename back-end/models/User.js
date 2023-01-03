import mongoose from "mongoose";

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
        ref: RoleSchema
    },

    organisme_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: OrganismeSchema
    },

    formation_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: FormationSchema
    },
})

export default UserSchema