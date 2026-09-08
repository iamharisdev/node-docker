const { Client } = require("pg");

const {
  dbHost,
  dbPort,
  dbName,
  dbUser,
  dbPassword,
  dbSsl
} = require("../config/env");

const db = new Client({
  host: dbHost,
  port: dbPort,
  database: dbName,
  user: dbUser,
  password: dbPassword,
  ssl: dbSsl === "true"
    ? { rejectUnauthorized: false }
    : false
});

async function connectDatabase() {
  await db.connect();
  console.log("PostgreSQL connected");
}

module.exports = {
  db,
  connectDatabase
};