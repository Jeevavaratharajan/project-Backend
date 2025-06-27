 const mongoose = require("mongoose");
 const ProductSchema = new mongoose.Schema({
    PropertyName:String,
    Location:String,
    Description:String,
    PropertType:String,
    Image:[String],
    Parking:Boolean,
    PetsAllowed:Boolean,
    

 });

 const ProductModel = mongoose.model("Product",ProductSchema);
 module.exports = ProductModel;