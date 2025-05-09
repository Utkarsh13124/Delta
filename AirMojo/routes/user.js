const express = require("express");
const router = express.Router(); // setting mergeParams true to preserve parameters from parents route
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require('passport');
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");
const { renderFile } = require("ejs");

router.get("/signup" , userController.renderSignUpForm);

router.post("/signup" , wrapAsync( userController.signup ));

router.get("/login" , userController.renderLoginForm);

// flow -> loginUrl -> saveing our currentUrl , passport ko call krna for authetication 
router.post("/login" , saveRedirectUrl ,  passport.authenticate("local" , { failureRedirect : '/login' , failureFlash : true}) ,  wrapAsync( userController.login));

// logout
router.get("/logout" , userController.logout)

module.exports = router;