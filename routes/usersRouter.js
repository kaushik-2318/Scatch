const express = require('express');
const router = express.Router()
const isLoginin = require("../middlewares/isLoggedIn")
const { registerUser, loginUser, logout } = require("../controllers/authControler")

// router.get("/", function (req, res) {
//     res.send("hey its working User");
// })

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logout);

module.exports = router;