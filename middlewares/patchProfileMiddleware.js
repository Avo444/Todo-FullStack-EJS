const { sendResponse } = require("../helpers");
const { patchProfileSchema } = require("../schemas");

const patchProfileMiddleware = async (req, res, next) => {
    try {
        const body = await patchProfileSchema.validateAsync(req.body);
        res.locals.body = body;
        next();
    } catch (err) {
        const error = { error: err.message };
        sendResponse(res, error, 400);
    }
};

module.exports = patchProfileMiddleware;
