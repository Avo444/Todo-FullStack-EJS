const { sendResponse } = require("../helpers");

class ProfileController {
    async changeProfileData(req, res) {
        try {
            const { body } = res.locals;
            const changed =
                await req.app.locals.services.user.changeProfileData(body);

            sendResponse(res, changed);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }
}

module.exports = ProfileController;
