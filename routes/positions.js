const express = require("express");
const router = express.Router();
const positionsCtrl = require("../controllers/positions");
const isLoggedIn = require('../config/auth');

//GET all /positions
router.get("/", isLoggedIn, positionsCtrl.index);
//GET /positions/new
router.get("/new", isLoggedIn, positionsCtrl.new);
//POST /positions
router.post("/", isLoggedIn, positionsCtrl.create);
//GET /positions/:id
router.get("/:id", isLoggedIn, positionsCtrl.show);
//DELETE /positions/:id
router.delete("/:id", isLoggedIn, positionsCtrl.delete);
//PUT /positions/:id
router.put("/:id", isLoggedIn, positionsCtrl.update);


module.exports = router;