const { ProfileController } = require("../controllers");
const { patchProfileMiddleware } = require("../middlewares");

const express = require("express");
const router = express.Router();

const profileController = new ProfileController();

router.patch(
    "/profile",
    patchProfileMiddleware,
    profileController.changeProfileData,
);

module.exports = router;
