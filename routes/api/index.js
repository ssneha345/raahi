var express = require("express");
var router = express.Router();


//TODO: add error and info

router.use("/", require("./users"));

module.exports = router;
