const fs = require("fs").promises;

const updateFile = async (path, data) =>
    await fs.writeFile(path, JSON.stringify(data, null, 4));

module.exports = updateFile;
