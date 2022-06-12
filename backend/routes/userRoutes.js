const express = require('express');
const { registerUser } = require("../controllers/userControllers");
const { authUser } = require("../controllers/userControllers");
// import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
// router.post("/login", authUser);
// router.route("/profile").post(protect, updateUserProfile);

module.exports = router;