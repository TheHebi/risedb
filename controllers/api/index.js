const express = require('express');
const router = express.Router();
const monsterRoutes = require("./monsterRoutes");
const partRoutes = require("./partRoutes");

router.use("/monsters",monsterRoutes);
router.use("/parts",partRoutes);


module.exports = router;