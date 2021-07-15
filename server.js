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


//Server Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


//Importing Routes
const authRoute = require("./routes/authroute")


//Configuring Dotenv
dotenv.config();
//DB Connection
mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
}, () => { console.log("Database Connected SuccessFully..!!") })


//Calling Of All Routes
app.use("/app", authRoute);


//Production Route
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}


//Server Listening At This Port
app.listen(port, () => { console.log(`Server has Started listening on Port ${port}`) })