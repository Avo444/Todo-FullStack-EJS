const usersMiddleware = require("./usersMiddleware");
const loginMiddleware = require("./loginMiddleware");
const todosMiddleware = require("./todosMiddleware");
const sessionMiddleware = require("./sessionMiddleware");
const registerMiddleware = require("./registerMiddleware");
const postTodoMiddleware = require("./postTodoMiddleware");
const patchTodoMiddleware = require("./patchTodoMiddleware");
module.exports = {
    loginMiddleware,
    todosMiddleware,
    usersMiddleware,
    sessionMiddleware,
    registerMiddleware,
    postTodoMiddleware,
    patchTodoMiddleware,
};
