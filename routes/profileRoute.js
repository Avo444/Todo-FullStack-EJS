const { sendResponse, updateFile, createPath } = require("../helpers");
const {
    sessionMiddleware,
    usersMiddleware,
    patchProfileMiddleware,
} = require("../middlewares");

const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.patch(
    "/profile",
    sessionMiddleware,
    usersMiddleware,
    patchProfileMiddleware,
    async (req, res) => {
        try {
            const { session, users, body } = res.locals;
            if (!session.id) {
                throw new Error("You aren't logged in!");
            }

            const user = users.findIndex((user) => user.id === session.id);

            if (user === -1) {
                throw new Error("User is not found");
            }
            if (body.oldPassword) {
                const checkPassword = await bcrypt.compare(
                    body.oldPassword,
                    users[user].password,
                );
                if (!checkPassword) {
                    throw new Error("Wrong password!");
                }

                const newPassword = await bcrypt.hash(body.password, 10);
                if (newPassword) {
                    body.password = newPassword;
                } else {
                    throw new Error("There are was a problem!");
                }
            }

            delete body.oldPassword;
            users[user] = {
                ...users[user],
                ...body,
            };

            await updateFile(createPath("db", "users.json"), users);
            sendResponse(res, users[user]);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    },
);

module.exports = router;
