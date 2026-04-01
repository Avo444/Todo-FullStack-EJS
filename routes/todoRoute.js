const { TodoController } = require("../controllers");
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

const todoController = new TodoController();

router.get("/todo", todoController.getUserTodos);
router.get("/todo/:id", todoController.getUserTodo);
router.post("/todo", postTodoMiddleware, todoController.addTodo);
router.patch("/todo/:id", patchTodoMiddleware, todoController.changeTodoData);

router.delete("/todo/:id", todoController.deleteTodo);

module.exports = router;
