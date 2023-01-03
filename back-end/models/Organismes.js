import mongoose from "mongoose";

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

export default OrganismeSchema