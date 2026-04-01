const { AuthService, UserService, TodoService } = require("./services");
const { pageRoute, authRoute, todoRoute, profileRoute } = require("./routes");
require("dotenv").config();

const express = require("express");
const app = express();

const authService = new AuthService();
const userService = new UserService();
const todoService = new TodoService();

app.locals.services = {
    auth: authService,

    user: userService,
    todo: todoService,
};

app.use(express.json());
app.use(express.static("views"));
app.set("view-engine", "ejs");

app.use("/", pageRoute);
app.use("/auth", authRoute);
app.use("/api", todoRoute);
app.use("/api", profileRoute);

app.listen(process.env.PORT, (err) => {
    console.log(err ? err : "Server is connected!");
});
