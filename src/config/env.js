module.exports = {
  appName: process.env.APP_NAME,
  appPort: process.env.APP_PORT,

  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,

  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbSsl: process.env.DB_SSL
};