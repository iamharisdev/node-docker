const { Hono } = require("hono");

const { appName } = require("./config/env");
const userRoutes = require("./routes/user.routes");

const app = new Hono();

app.get("/", (c) => c.text(`${appName} is running`));
app.get("/health", (c) => c.json({ status: "ok" }));
app.route("/api/users", userRoutes);

module.exports = app;
