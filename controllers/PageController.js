const { sendResponse, createPath } = require("../helpers");

class PageController {
    async home(req, res) {
        try {
            const session = await req.app.locals.services.page.session();
            sendResponse(
                res,
                [
                    createPath("views", "index.ejs"),
                    { title: "Home", session: session },
                ],
                200,
                "text/html",
            );
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 404);
        }
    }

    async login(req, res) {
        try {
            const session = await req.app.locals.services.page.session();
            if (session.id) {
                return res.redirect("/profile");
            }
            const data = [
                createPath("views", "auth.ejs"),
                { title: "Login", session },
            ];
            sendResponse(res, data, 200, "text/html");
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 404);
        }
    }

    async signup(req, res) {
        try {
            const session = await req.app.locals.services.page.session();
            if (session.id) {
                return res.redirect("/profile");
            }
            const data = [
                createPath("views", "auth.ejs"),
                { title: "Signup", session },
            ];
            sendResponse(res, data, 200, "text/html");
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 404);
        }
    }

    async logout(req, res) {
        try {
            const session = await req.app.locals.services.page.session();
            if (!session.id) {
                res.redirect("/");
            }
            await req.app.locals.services.auth.logout();
            res.redirect("/login");
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }

    async profile(req, res) {
        try {
            const session = await req.app.locals.services.user.session();
            if (!session.id) {
                res.redirect("/login");
            }

            const todos = await req.app.locals.services.todo.getUserTodos(session.id);
            const user = await req.app.locals.services.user.getUser(session.id);

            const data = [
                createPath("views", "profile.ejs"),
                { title: "Profile", session, user, todos },
            ];
            sendResponse(res, data, 200, "text/html");
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 403);
        }
    }

    async getTodoByID(req, res) {
        try {
            const { id } = req.params;
            const session = await req.app.locals.services.todo.session();
            const todo = await req.app.locals.services.todo.getTodoByID(id);

            const data = [
                createPath("views", "view.ejs"),
                { title: todo.title, todo, session },
            ];
            sendResponse(res, data, 200, "text/html");
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 404);
        }
    }

    async settings(req, res) {
        try {
            const session = await req.app.locals.services.user.session();
            const user = await req.app.locals.services.user.getUser(session.id);

            const data = [
                createPath("views", "settings.ejs"),
                { title: "Settings", user, session },
            ];
            sendResponse(res, data, 200, "text/html");
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 404);
        }
    }
}

module.exports = PageController;
