const path = require("path");
const createPath = (...arr) => path.join(path.resolve(), ...arr);

module.exports = createPath;
