const { sendResponse } = require("../helpers");

class TodoController {
    async getUserTodos(req, res) {
        try {
            const session = await req.app.locals.services.todo.session();
            const todos = await req.app.locals.services.todo.getUserTodos(
                session.id,
            );
            sendResponse(res, todos);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }

    async getUserTodo(req, res) {
        try {
            const { id } = req.params;
            const todos = await req.app.locals.services.todo.getTodoByID(id);

            sendResponse(res, todos);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }

    async addTodo(req, res) {
        try {
            const { body } = res.locals;
            const newTodo = await req.app.locals.services.todo.addTodo(body);

            sendResponse(res, newTodo);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }

    async changeTodoData(req, res) {
        try {
            const { id } = req.params;
            const { body } = res.locals;

            const updated = await req.app.locals.services.todo.changeTodoData(
                id,
                body,
            );
            sendResponse(res, updated);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }

    async deleteTodo(req, res) {
        try {
            const { id } = req.params;
            const message = await req.app.locals.services.todo.deleteTodo(id);
            sendResponse(res, message);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }
}

module.exports = TodoController;
