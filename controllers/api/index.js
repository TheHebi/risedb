const express = require('express');
const router = express.Router();
const monsterRoutes = require("./monsterRoutes");
const partRoutes = require("./partRoutes");
const rankRoutes = require("./rankRoutes");

router.use("/monsters",monsterRoutes);
router.use("/parts",partRoutes);
router.use("/ranks",rankRoutes);


module.exports = router;