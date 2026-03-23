const { pageRoute, authRoute, todoRoute, profileRoute } = require("./routes");
require("dotenv").config();

const express = require("express");
const app = express();

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
