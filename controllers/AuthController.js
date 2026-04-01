const { sendResponse } = require("../helpers");

class AuthControlller {
    async register(req, res) {
        try {
            const { body } = res.locals;
            const newUser = await req.app.locals.services.auth.register(body);
            sendResponse(res, newUser);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }

    async login(req, res) {
        try {
            const { body } = res.locals;
            const isLogin = await req.app.locals.services.auth.login(body);
            sendResponse(res, isLogin);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }
}

module.exports = AuthControlller;
