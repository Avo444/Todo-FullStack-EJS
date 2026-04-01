const RootService = require("./RootService");

class UserService extends RootService {
    async getUsers() {
        const users = await RootService.database("users");
        return users;
    }

    async getUser(id) {
        const session = await this.session();
        if (!session.id) {
            res.redirect("/login");
        }

        const users = await RootService.database("users");
        const user = users.find((user) => user.id === id);
        if (!user) {
            throw new Error("User is not found!");
        }

        return user;
    }

    async changeProfileData(body) {
        const session = await this.session();
        if (!session.id) {
            throw new Error("You aren't logged in!");
        }
        const users = await RootService.database("users");
        const user = users.findIndex((user) => user.id === session.id);

        if (user === -1) {
            throw new Error("User is not found");
        }
        if (body.oldPassword) {
            const checkPassword = await bcrypt.compare(
                body.oldPassword,
                users[user].password,
            );
            if (!checkPassword) {
                throw new Error("Wrong password!");
            }

            const newPassword = await bcrypt.hash(body.password, 10);
            if (newPassword) {
                body.password = newPassword;
            } else {
                throw new Error("There are was a problem!");
            }
        }

        delete body.oldPassword;
        users[user] = {
            ...users[user],
            ...body,
        };

        await RootService.save("users", users);

        return users[user];
    }
}

module.exports = UserService;
