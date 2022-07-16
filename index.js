const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const allRoutes = require('./routes');
const bodyParser = require('body-parser');
  
const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use('/', allRoutes);
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
