const { createClient } = require("redis");

const {
  redisHost,
  redisPort
} = require("../config/env");

const redis = createClient({
  url: `redis://${redisHost}:${redisPort}`
});

redis.on("error", (err) => {
  console.error("Redis Error:", err);
});

async function connectRedis() {
  await redis.connect();
  console.log("Redis connected");
}

module.exports = {
  redis,
  connectRedis
};