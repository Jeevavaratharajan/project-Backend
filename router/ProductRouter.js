const express = require("express");
const router = express.Router();
const {CreateData,getAllProperty,getPropertyByName,deletePropertyById} = require("../controller/ProductController");


router.post("/Add", CreateData);
router.get("/GetAll", getAllProperty);
router.get("/GetByName/:name",getPropertyByName);
router.delete("/Delete/:id",deletePropertyById);


module.exports = router;