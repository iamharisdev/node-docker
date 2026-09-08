module.exports = {
  appName: process.env.APP_NAME,
  appPort: Number(process.env.APP_PORT || 3000),

  dbHost: process.env.DB_HOST,
  dbPort: Number(process.env.DB_PORT || 5432),
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbSsl: process.env.DB_SSL
};