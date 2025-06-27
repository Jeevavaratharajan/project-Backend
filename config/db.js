require("dotenv").config();
const mongoose = require("mongoose")
const url = process.env.URL;
const DbConnect = async () => {
  try {
    await mongoose.connect(url)
  if(mongoose.connection.readyState === 1){
   console.log("DataBase Connected Successfully");
   return mongoose.connection
  }else{
    console.log("DataBase is not Connected");
    
  }
 
  } catch (err) {
    console.log("Error In dataBase Connection");
  }
};
module.exports = DbConnect;
