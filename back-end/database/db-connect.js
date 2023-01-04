const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const dbConnect = async () => {
    const db = process.env.DB_URL
    try {
      const data = await mongoose.connect(db);
  
      console.log("connected ", data.connection.host);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  module.exports = dbConnect;