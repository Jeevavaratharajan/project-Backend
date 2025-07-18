
const ProductModel = require("../models/ProductModel") 

const AddData = async (data)=>{
    const result = await ProductModel.create(data);
     return result;
};

const getAllData = async()=>{
 const result = await ProductModel.find();
 return result;
};

const getDataById = async(id)=>{
const result = await ProductModel.findById(id);
 return result;
}

const deleteDataById = async(id)=>{
 const result = await ProductModel.deleteDataById(id);
 return result;
}
module.exports = {
    AddData,getAllData,getDataById,deleteDataById
};