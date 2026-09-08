const http = require("http");

const {
  appName,
  appPort
} = require("./config/env");

const {
  redis,
  connectRedis
} = require("./redis/redis");

const {
  db,
  connectDatabase
} = require("./database/postgres");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end(`${appName} is running in live server deployment save! 🚀`);
});

async function start() {
  await connectRedis();

  await redis.set("name", "Haris");

  const name = await redis.get("name");

  console.log("Value from Redis:", name);

  await connectDatabase();

  const result = await db.query("SELECT NOW()");

  console.log(
    "Database time:",
    result.rows[0].now
  );
  console.log("🚀 Version 2 deployed!");

  server.listen(appPort, () => {
    console.log(
      `Server running on port ${appPort}`
    );
  });
}

start();