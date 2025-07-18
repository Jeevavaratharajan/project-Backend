 const mongoose = require("mongoose");
 const ProductSchema = new mongoose.Schema({
    PropertyName:String,
    Location:String,
    Description:String,
    PropertyType:String,
    Image:[String],
    Parking:Boolean,
    Pets:Boolean,
    

 });

 const ProductModel = mongoose.model("Product",ProductSchema);
 module.exports = ProductModel;