const {
    sendResponse,
    updateFile,
    createPath,
    formatDate,
} = require("../helpers");
const {
    todosMiddleware,
    postTodoMiddleware,
    sessionMiddleware,
    patchTodoMiddleware,
} = require("../middlewares");

const express = require("express");
const router = express.Router();

router.get("/todo", sessionMiddleware, todosMiddleware, (req, res) => {
    try {
        const { todos, session } = res.locals;
        const filtered = todos.filter((todo) => todo.userID === session.id);
        sendResponse(res, filtered);
    } catch (err) {
        const error = { error: err.message };
        sendResponse(res, error, 500);
    }
});

router.get(
    "/todo/:id",
    sessionMiddleware,
    todosMiddleware,
    async (req, res) => {
        try {
            const { id } = req.params;
            const { session, todos } = res.locals;

            if (!session.id) {
                throw new Error("You aren't logged in!");
            }

            const todo = todos.find((todo) => todo.id === id);
            if (!todo) {
                throw new Error("Todo is not found!");
            }

            if (todo.userID !== session.id) {
                throw new Error("This is not your todo");
            }

            sendResponse(res, todo);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    },
);

router.post(
    "/todo",
    sessionMiddleware,
    todosMiddleware,
    postTodoMiddleware,
    async (req, res) => {
        try {
            const { session, body, todos } = res.locals;
            if (!session.id) {
                throw new Error("You aren't logged in!");
            }
            const newTodo = {
                ...body,
                isDone: false,
                userID: session.id,
                createdAt: formatDate(),
                id: crypto.randomUUID(),
            };
            todos.push(newTodo);

            await updateFile(createPath("db", "todos.json"), todos);
            sendResponse(res, newTodo);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    },
);

router.patch(
    "/todo/:id",
    sessionMiddleware,
    todosMiddleware,
    patchTodoMiddleware,
    async (req, res) => {
        try {
            const { id } = req.params;
            const { body, session, todos } = res.locals;

            if (!session.id) {
                throw new Error("You aren't logged in");
            }

            const todo = todos.findIndex((todo) => todo.id === id);

            if (todo === -1) {
                throw new Error("Todo is not found!");
            }
            if (todos[todo].userID !== session.id) {
                throw new Error("This isn't your todo");
            }

            todos[todo] = {
                ...todos[todo],
                ...body,
                updatedAt: formatDate(),
            };

            await updateFile(createPath("db", "todos.json"), todos);
            sendResponse(res, todos[todo]);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    },
);

router.delete(
    "/todo/:id",
    sessionMiddleware,
    todosMiddleware,
    async (req, res) => {
        try {
            const { id } = req.params;
            const { session, todos } = res.locals;

            if (!session.id) {
                throw new Error("You can't logged in!");
            }
            const todo = todos.findIndex((todo) => todo.id === id);

            if (todo === -1) {
                throw new Error("Todo is not found");
            }

            if (todos[todo].userID !== session.id) {
                throw new Error("This isn't your todo!");
            }

            todos.splice(todo, 1);

            await updateFile(createPath("db", "todos.json"), todos);
            const message = { message: "Success!" };
            sendResponse(res, message);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    },
);

module.exports = router;
