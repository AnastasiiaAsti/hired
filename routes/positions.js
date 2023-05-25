const express = require("express");
const router = express.Router();
const positionsCtrl = require("../controllers/positions");
const isLoggedIn = require('../config/auth');

//GET all /positions
router.get("/", isLoggedIn, positionsCtrl.index);
//GET /jobs/new
router.get("/new", isLoggedIn, positionsCtrl.new);
//POST /jobs
router.post("/", isLoggedIn, positionsCtrl.create);
//GET /jobs/:id
router.get("/:id", isLoggedIn, positionsCtrl.show);
//DELETE /jobs/:id
router.delete("/:id", isLoggedIn, positionsCtrl.delete);

module.exports = router;