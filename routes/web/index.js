var express = require("express");
var router = express.Router();


//TODO: add error and info

router.use("/", require("./home"));

module.exports = router;
