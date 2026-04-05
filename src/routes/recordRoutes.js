const express = require("express");
const router = express.Router();
const { createRecord, getRecords, updateRecord, deleteRecord } = require("../controllers/recordController");
const { auth } = require("../middleware/auth");
const { allowRoles } = require("../middleware/role");

router.post("/", auth, allowRoles("admin"), createRecord);
router.get("/", auth, getRecords);
router.put("/:id", auth, allowRoles("admin"), updateRecord);
router.delete("/:id", auth, allowRoles("admin"), deleteRecord);

module.exports = router;
