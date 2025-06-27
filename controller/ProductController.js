const { AddData, getAllData ,getDataByName,deleteDataById} = require("../server/ProductServer");

const CreateData = async (req, res) => {
  try {
    const data = req.body;
    const result = await AddData(data);
    if (result) {
      res.status(201).json({ message: "Data Added Successfully" });
      console.log("Data Added Successfully");
    } else {
      console.log("Data Not Added");
    }
  } catch (err) {
    console.error("Error in create Data", err);
    res
      .status(500)
      .json({ message: "Internal Server Error in express", error: err.message });
  }
};

const getAllProperty = async (req, res) => {
  try {
    const data = await getAllData();
    if (data.length > 0) {
      res.status(200).json(data);
      console.log("Data Fetched successfully");
      return data;
    } else {
      res.status(404).json({ message: "No Data Found" });
      console.log("No data Found");
    }
  } catch (err) {
    console.error("Error in Fetch All Data", err);
    res.status(500).json({ message: "Internal Server Error",error:err.message });
  }
};

const getPropertyByName = async (req, res) => {
  try {
    const name = req.params.name;
    const data = await getDataByName(name);
    if (data) {
      res.status(200).json(data);
      console.log("Data Fetched successfully");
      return data;
    }
  } catch (err) {
    console.error("Error in Fetch Data", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


const deletePropertyById = async (req,res)=>{
    try{
      const id = req.params.id;
      const data = await deleteDataById(id);
      if(data.deletedCount > 0){
        res.status(200).json({message:"Data Deleted Successfully"});
        console.log("Data Deleted Successfully");
      }else{
        console.log("No Data Found to Delete");
      }
    }catch(err){
      res.status(500).json({message:"Internal Server Error"})
      console.error("Error in Delete Data",err);
      
    }
}

module.exports = { CreateData, getAllProperty,getPropertyByName,deletePropertyById };
