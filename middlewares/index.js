
const loginMiddleware = require("./loginMiddleware");
const registerMiddleware = require("./registerMiddleware");
const postTodoMiddleware = require("./postTodoMiddleware");
const patchTodoMiddleware = require("./patchTodoMiddleware");
const patchProfileMiddleware = require("./patchProfileMiddleware");

module.exports = {
    loginMiddleware,
    registerMiddleware,
    postTodoMiddleware,
    patchTodoMiddleware,
    patchProfileMiddleware,
};
