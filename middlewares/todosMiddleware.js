const { sendResponse, readFile, createPath } = require("../helpers");

const todosMiddleware = async (req, res, next) => {
    try {
        const todos = await readFile(createPath("db", "todos.json"));
        res.locals.todos = todos;
        next();
    } catch (err) {
        const error = { error: err.message };
        sendResponse(res, error, 400);
    }
};

module.exports = todosMiddleware;
