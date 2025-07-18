const { response } = require("express");
const { default: MailTransponder } = require("../config/MailTransponder");

const MailEnquiry = async(req , res)=>{
     
    try{
      const {email , phone , subject , content} = req.body ;
      if(email && phone){
       const response = await MailTransponder.sendMail({
            from : process.env.MAIL_ID,
            to : email,
            subject : subject,
            text : content,
        })
        res.status(200).json({message:"Mail Sent Scuccessfully",response});
      }else{
        res.status(400).json({message:"Email and Phone are required  or some other error"});
      }
    }catch(err){
         res.status(500).json({message:"Internal Server Error in Mail Enquiry", error: err.message});
         }
    }

module.exports = { MailEnquiry };