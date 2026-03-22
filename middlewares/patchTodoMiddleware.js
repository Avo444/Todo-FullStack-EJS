const { sendResponse } = require("../helpers");
const { patchTodoSchema } = require("../schemas");

const patchTodoMiddleware = async (req, res, next) => {
    try {
        const body = await patchTodoSchema.validateAsync(req.body);
        res.locals.body = body;
        next();
    } catch (err) {
        const error = { error: err.message };
        sendResponse(res, error, 400);
    }
};

module.exports = patchTodoMiddleware;
