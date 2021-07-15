//Requiring Packages
const express = require("express");
const bp = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");


//Intialization
const app = express();
const port = process.env.PORT || 5000;




//Server Listening At This Port
app.listen(port, () => { console.log(`Server has Started listening on Port ${port}`) })