const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

//single emails
router.post('/emails', async (req,res)=> {
    const {email, subject, message} = req.body;
    if(!email && !subject && !message){
        return res.json("Incomplete data");
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_NAME,
          pass: process.env.PASSWORD
        }
      });
      
      let mailOptions = {
        from: process.env.EMAIL_NAME,
        to: email,
        subject: subject,
        text: message,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if(error) return res.json({message: 'Email not sent', data: error});
        else return res.json({message: 'Email sent successfully', code: 200, data: info.response});    
      });
});


//BULK MESSAGES
router.post('/multiple-emails', async (req,res)=> {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_NAME,
          pass: process.env.PASSWORD
        }
      });
      
    let maillist = [
        'shitta19@gmail.com',
        'gilbertdosumu@gmail.com',
        'ugofficial001@gmail.com',
    ];
    /*
    
    Another method
    let maillist = "shitta19@gmail.com, gilbertdosumu@gmail.com, ugofficial001@gmail.com"

    */

    let mailOptions = {
        from: process.env.EMAIL_NAME,
        to: maillist,
        subject: 'Hello',
        text: 'This is an automated message, Kindly ignore',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) return res.json({message: 'Emails not sent', data: error});
        else return res.json({message: 'All emails sent successfully', code: 200, data: info.response});    
    });
});

module.exports = router;