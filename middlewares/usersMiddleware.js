const { sendResponse, readFile, createPath } = require("../helpers");

const usersMiddleware = async (req, res, next) => {
    try {
        const users = await readFile(createPath("db", "users.json"));
        res.locals.users = users;
        next();
    } catch (err) {
        const error = { error: err.message };
        sendResponse(res, error, 404);
    }
};

module.exports = usersMiddleware;
