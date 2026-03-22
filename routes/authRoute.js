const {
    registerMiddleware,
    usersMiddleware,
    loginMiddleware,
    sessionMiddleware,
} = require("../middlewares");
const { sendResponse, updateFile, createPath } = require("../helpers");

const express = require("express");
const router = express.Router();

router.post(
    "/signup",
    usersMiddleware,
    registerMiddleware,
    async (req, res) => {
        try {
            const { users, body } = res.locals;
            const user = users.find((user) => user.email === body.email);

            if (user) {
                throw new Error("An account with this email already exist!");
            }

            const newUser = {
                ...body,
                id: crypto.randomUUID(),
            };
            users.push(newUser);

            await updateFile(createPath("db", "users.json"), users);
            sendResponse(res, newUser);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    },
);

router.post(
    "/login",
    sessionMiddleware,
    usersMiddleware,
    loginMiddleware,
    async (req, res) => {
        try {
            const { session, users, body } = res.locals;
            const getTime = new Date().getTime();

            if (!session.wrong) {
                session.wrong = 0;
            }

            if (session.blockedTime && session.blockedTime > getTime) {
                const minutes = Math.ceil(
                    (session.blockedTime - getTime) / 60000,
                );
                throw new Error(`You can login from ${minutes} minutes`);
            } else {
                session.blockedTime = null;
                await updateFile(createPath("db", "session.json"), session);
            }

            const user = users.find((user) => user.email === body.email);

            if (!user) {
                throw new Error("User is not found");
            }
            if (user.password !== body.password) {
                session.wrong++;
                if (session.wrong === 3) {
                    session.wrong = 0;
                    session.blockedTime = getTime + 900000;
                    await updateFile(createPath("db", "session.json"), session);
                    throw new Error("Youn are blocked 15 minute!");
                }

                await updateFile(createPath("db", "session.json"), session);
                throw new Error(`Wrong Password | ${session.wrong}/3`);
            }

            await updateFile(createPath("db", "session.json"), { id: user.id });
            sendResponse(res, user);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    },
);


module.exports = router;
