const mongoose = require('mongoose')

const FormationHistorySchema = new mongoose.Schema({
      user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },

      formation_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Formations"
    },
      
})

module.exports = mongoose.model('FormationHistory', FormationHistorySchema)