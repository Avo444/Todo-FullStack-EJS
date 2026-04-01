const { AuthControlller } = require("../controllers");
const { registerMiddleware, loginMiddleware } = require("../middlewares");

const express = require("express");
const router = express.Router();

const authController = new AuthControlller();

router.post("/signup", registerMiddleware, authController.register);
router.post("/login", loginMiddleware, authController.login);

module.exports = router;
