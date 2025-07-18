nodemailer = require('nodemailer');
require('dotenv').config();

const MailTransponder = nodemailer.createTransport({
    
    service : "gmail",
    auth:{
        mail: process.env.MAIL_ID,
        pass: process.env.PASSWORD_ID
    },
})
 
export default MailTransponder;