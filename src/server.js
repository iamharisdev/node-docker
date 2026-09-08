require("dotenv").config();

const { serve } = require("@hono/node-server");
const { appPort } = require("./config/env");
const app = require("./app");

async function start() {
  serve({
    fetch: app.fetch,
    port: appPort
  });

  console.log(`Server running on port ${appPort}`);
}

start().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});