const { eq } = require("drizzle-orm");

const { db } = require("../database/postgres");
const { users } = require("../database/schema");

async function findAllUsers() {
  return db.select().from(users);
}

async function findUserById(id) {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, id));

  return user;
}

async function createUser({ name, email }) {
  const [user] = await db
    .insert(users)
    .values({ name, email })
    .returning();

  return user;
}

async function deleteUserById(id) {
  const [user] = await db
    .delete(users)
    .where(eq(users.id, id))
    .returning();

  return user;
}

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  deleteUserById
};
