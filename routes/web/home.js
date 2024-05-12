var express = require("express");
var router = express.Router();

/* home routes  */
router.get("/",function(req,res){
    console.log("i am on the start page");
    res.render("home/index");
});

router.get("/home",function(req,res){
    console.log("i am on the start page");
    res.render("home/home");
});
/* aboutus routes  */
router.get("/contactus",function(req,res){
    console.log("i am on the start page");
    res.render("aboutus/contactus");
});

router.get("/team",function(req,res){
    console.log("i am on the start page");
    res.render("aboutus/team");
});

router.get("/partners",function(req,res){
    console.log("i am on the start page");
    res.render("aboutus/partners");
});

router.get("/messages",function(req,res){
    console.log("i am on the start page");
    res.render("aboutus/messages");
});

/* work\event routes  */

router.get("/upcoming",function(req,res){
    console.log("i am on the start page");
    res.render("work/upcoming");
});

router.get("/older",function(req,res){
    console.log("i am on the start page");
    res.render("work/older");
});

router.get("/2023",function(req,res){
    console.log("i am on the start page");
    res.render("work/2023");
});

/* products routes  */
router.get("/education",function(req,res){
    console.log("i am on the start page");
    res.render("products/education");
});

router.get("/environment",function(req,res){
    console.log("i am on the start page");
    res.render("products/environment");
});

router.get("/health",function(req,res){
    console.log("i am on the start page");
    res.render("products/health");
});

router.get("/oldage",function(req,res){
    console.log("i am on the start page");
    res.render("products/seniorcitizen");
});

router.get("/recreation",function(req,res){
    console.log("i am on the start page");
    res.render("products/recreation");
});

module.exports = router;