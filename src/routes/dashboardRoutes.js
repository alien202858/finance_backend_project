const express = require("express");
const router = express.Router();
const { getSummary } = require("../controllers/dashboardController");
const { auth } = require("../middleware/auth");

router.get("/summary", auth, getSummary);

module.exports = router;
