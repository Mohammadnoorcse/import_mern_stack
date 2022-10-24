const express = require("express");
const { authController, getUserProfile, registerUser } = require("../controllers/usersController");
const { protect } = require("../middleware/authMiddleware");


const router = express.Router()
//user registration
router.post('/',registerUser)

// login
router.post('/login',authController);

//get user profile Private Route
router.post('/profile',protect,getUserProfile);



module.exports = router