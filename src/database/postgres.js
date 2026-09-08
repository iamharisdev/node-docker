const { Pool } = require("pg");
const { drizzle } = require("drizzle-orm/node-postgres");

const {
  dbHost,
  dbPort,
  dbName,
  dbUser,
  dbPassword,
  dbSsl
} = require("../config/env");

const pool = new Pool({
  host: dbHost,
  port: dbPort,
  database: dbName,
  user: dbUser,
  password: dbPassword,
  ssl: dbSsl === "true"
    ? { rejectUnauthorized: false }
    : false
});

const db = drizzle(pool);

module.exports = {
  db,
  pool
};