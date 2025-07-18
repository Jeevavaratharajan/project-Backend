require("dotenv").config();
const express = require("express");
const app = express();
const Connect = require("./config/db");
const ProductRouter = require("./router/ProductRouter");
const Enquiryrouter = require("./router/EnquiryRouter");
const cors = require("cors");
const { config } = require("dotenv");
port = process.env.PORT || 5000;


(async () => {
  try {
    const db = await Connect();
    if (db) {
      console.log("DataBase  Connected To MongoDb succesfully");
    } else {
      console.log("DataBAse Not Connected");
    }
  } catch (err) {
    console.error("something wrong in database connection in app.js");
  }
})();

app.use(cors({origin:"http://localhost:3002"}))

app.use(express.json({limit:"10mb"}));


app.use("/api/property",ProductRouter)
app.use("/api/property",Enquiryrouter)

app.listen(port, () => {
  console.log("Server is Running Successfully on http://localhost:"+port);
});

app.get("/", (req, res) => {
  res.send(`<h1> Maple  Server Running on ${port}</h1>`);
});
