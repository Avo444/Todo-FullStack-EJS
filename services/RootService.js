const { readFile, createPath, updateFile } = require("../helpers");

class RootService {
    static async database(file) {
        const database = await readFile(createPath("db", `${file}.json`));
        return database;
    }

    static async save(file, data) {
        return await updateFile(createPath("db", `${file}.json`), data);
    }

    async session() {
        const session = await RootService.database("session");
        return session;
    }
}

module.exports = RootService;
