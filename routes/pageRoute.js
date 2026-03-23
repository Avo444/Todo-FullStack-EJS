const { createPath, sendResponse, updateFile } = require("../helpers");
const {
    sessionMiddleware,
    usersMiddleware,
    todosMiddleware,
} = require("../middlewares");

const express = require("express");
const router = express.Router();

router.get("/", sessionMiddleware, async (req, res) => {
    try {
        const { session } = res.locals;
        sendResponse(
            res,
            [
                createPath("views", "index.ejs"),
                { title: "Home", session: session },
            ],
            200,
            "text/html",
        );
    } catch (err) {
        const error = { error: err.message };
        sendResponse(res, error, 404);
    }
});

// ====================================== [ Auth ] ======================================

router.get("/login", sessionMiddleware, async (req, res) => {
    try {
        const { session } = res.locals;
        if (session.id) {
            return res.redirect("/profile");
        }
        const data = [
            createPath("views", "auth.ejs"),
            { title: "Login", session },
        ];
        sendResponse(res, data, 200, "text/html");
    } catch (err) {
        const error = { error: err.message };
        sendResponse(res, error, 404);
    }
});

router.get("/signup", sessionMiddleware, async (req, res) => {
    try {
        const { session } = res.locals;
        if (session.id) {
            return res.redirect("/profile");
        }
        const data = [
            createPath("views", "auth.ejs"),
            { title: "Signup", session },
        ];
        sendResponse(res, data, 200, "text/html");
    } catch (err) {
        const error = { error: err.message };
        sendResponse(res, error, 404);
    }
});

router.get("/logout", sessionMiddleware, async (req, res) => {
    try {
        const { session } = res.locals;
        if (!session.id) {
            res.redirect("/");
        }
        await updateFile(createPath("db", "session.json"), {});
        res.redirect("/login");
    } catch (err) {
        const error = { error: err.message };
        sendResponse(res, error, 500);
    }
});

// ====================================== [ Profile ] ======================================

router.get(
    "/profile",
    sessionMiddleware,
    usersMiddleware,
    todosMiddleware,
    async (req, res) => {
        try {
            const { todos, users, session } = res.locals;
            if (!session.id) {
                res.redirect("/login");
            }

            const user = users.find((user) => user.id === session.id);
            if (!user) {
                throw new Error("User is not found!");
            }
            const filtered = todos.filter((todo) => todo.userID === session.id);
            const data = [
                createPath("views", "profile.ejs"),
                { title: "Profile", session, user, todos: filtered },
            ];
            sendResponse(res, data, 200, "text/html");
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 403);
        }
    },
);

router.get(
    "/profile/:id",
    sessionMiddleware,
    todosMiddleware,
    async (req, res) => {
        try {
            const { id } = req.params;
            const { session, todos } = res.locals;
            if (!session.id) {
                res.redirect("/login");
            }

            const todo = todos.find((todo) => todo.id === id);
            if (!todo) {
                throw new Error("Todo is not found!");
            }

            if (todo.userID !== session.id) {
                throw new Error("This is not your todo");
            }

            const data = [
                createPath("views", "view.ejs"),
                { title: todo.title, todo },
            ];
            sendResponse(res, data, 200, "text/html");
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 404);
        }
    },
);

router.get(
    "/settings",
    sessionMiddleware,
    usersMiddleware,
    async (req, res) => {
        try {
            const { session, users } = res.locals;
            if (!session.id) {
                res.redirect("/login");
            }

            const user = users.find((user) => user.id === session.id);
            if (!user) {
                throw new Error("User is not found!");
            }
            const data = [
                createPath("views", "settings.ejs"),
                { title: "Settings", user },
            ];
            sendResponse(res, data, 200, "text/html");
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 404);
        }
    },
);

module.exports = router;
