const bcrypt = require("bcryptjs");
const RootService = require("./RootService");

class AuthService extends RootService {
    async register(body) {
        const users = await RootService.database("users");
        const user = users.find((user) => user.email === body.email);

        if (user) {
            throw new Error("An account with this email already exist!");
        }
        const password = await bcrypt.hash(body.password, 10);
        const newUser = {
            ...body,
            id: crypto.randomUUID(),
            password: password,
        };
        users.push(newUser);
        await RootService.save("users", users);

        return newUser;
    }

    async login(body) {
        const users = await RootService.database("users");
        const session = await RootService.database("session");

        const getTime = new Date().getTime();

        if (!session.wrong) {
            session.wrong = 0;
        }

        if (session.blockedTime && session.blockedTime > getTime) {
            const minutes = Math.ceil((session.blockedTime - getTime) / 60000);
            throw new Error(`You can login from ${minutes} minutes`);
        } else {
            session.blockedTime = null;
            await RootService.save("session", session);
        }

        const user = users.find((user) => user.email === body.email);

        if (!user) {
            throw new Error("User is not found");
        }

        const checkPassword = await bcrypt.compare(
            body.password,
            user.password,
        );

        if (!checkPassword) {
            session.wrong++;
            if (session.wrong === 3) {
                session.wrong = 0;
                session.blockedTime = getTime + 900000;
                await RootService.save("session", session);
                throw new Error("Youn are blocked 15 minute!");
            }
            await RootService.save("session", session);
            throw new Error(`Wrong Password | ${session.wrong}/3`);
        }
        await RootService.save("session", { id: user.id });
        return user;
    }

    async logout() {
        await RootService.save("session", {});
    }
}

module.exports = AuthService;
