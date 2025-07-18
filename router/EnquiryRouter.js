const Enquiryrouter = require("./ProductRouter");

const { MailEnquiry } = require("../controller/EnquiryController");

Enquiryrouter.post("/enquiry",MailEnquiry);
module.exports = Enquiryrouter;