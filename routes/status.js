const express = require("express");
const router = express.Router();
const statusCtrl = require("../controllers/status");
const isLoggedIn = require('../config/auth');

//POST /positions/:id/status
router.post("/positions/:id/status", isLoggedIn, statusCtrl.create);


module.exports = router;