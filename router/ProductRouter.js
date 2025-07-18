const express = require("express");
const router = express.Router();
const {CreateData,getAllProperty,getPropertyById,deletePropertyById} = require("../controller/ProductController");


router.post("/Add", CreateData);
router.get("/GetAll", getAllProperty);
router.get("/GetById/:id",getPropertyById);
router.delete("/Delete/:id",deletePropertyById);


module.exports = router;