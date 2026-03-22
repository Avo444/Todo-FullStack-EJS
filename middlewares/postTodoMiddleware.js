const { sendResponse } = require("../helpers");
const { postTodoSchema } = require("../schemas");

const postTodoMiddleware = async (req, res, next) => {
    try {
        const body = await postTodoSchema.validateAsync(req.body);
        res.locals.body = body;
        next();
    } catch (err) {
        const error = { error: err.message };
        sendResponse(res, error, 400);
    }
};

module.exports = postTodoMiddleware;
