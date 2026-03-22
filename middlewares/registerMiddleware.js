const { sendResponse } = require("../helpers");
const { registerSchema } = require("../schemas");

const registerMiddleware = async (req, res, next) => {
    try {
        const body = await registerSchema.validateAsync(req.body);
        res.locals.body = body;
        next();
    } catch (err) {
        const error = { error: err.message };
        sendResponse(res, error, 400);
    }
};

module.exports = registerMiddleware;
