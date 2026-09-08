const { Client } = require("pg");

const {
  dbHost,
  dbPort,
  dbName,
  dbUser,
  dbPassword
} = require("../config/env");

const db = new Client({
  host: dbHost,
  port: dbPort,
  database: dbName,
  user: dbUser,
  password: dbPassword
});

async function connectDatabase() {
  await db.connect();
  console.log("PostgreSQL connected");
}

module.exports = {
  db,
  connectDatabase
};