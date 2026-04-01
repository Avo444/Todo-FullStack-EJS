const { PageController } = require("../controllers");

const express = require("express");
const router = express.Router();

const pageController = new PageController();

// ====================================== [ Home ] ======================================

router.get("/", pageController.home);

// ====================================== [ Auth ] ======================================

router.get("/login", pageController.login);
router.get("/signup", pageController.signup);
router.get("/logout", pageController.logout);

// ====================================== [ Profile ] ======================================

router.get("/profile", pageController.profile);
router.get("/profile/:id", pageController.getTodoByID);
router.get("/settings", pageController.settings);

module.exports = router;
