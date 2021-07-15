const express = require("express");
const router = express.router();
const bp = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");


//Initializing
router.use(bp.urlencoded({ extended: true }));
router.use(cors());
const users = require("../models/signupmodel")
const authMid = require("../middleware/authmid")